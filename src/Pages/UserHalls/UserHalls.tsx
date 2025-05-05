import { Button, Layout, List, Tag, Tooltip, Typography } from "antd"
import { getDateByFragments, getFormattedNumber, useTypedSelector } from "../../utils"
import { YMaps, Map, Placemark } from "@iminside/react-yandex-maps"

import './UserHalls.scss'
import { CalendarOutlined } from "@ant-design/icons"
import { useState } from "react"
import { AppModal, UserHallModalContent } from "../../components"
import { CompanyOrderType } from "../../store/userSlice"

const {Title} = Typography
const {Item} = List

type OrdersByDateType = {
    [key: string]: (CompanyOrderType & {time: string})[]
}

export const UserHalls = () => {
    const [calendarModalBranchName, setCalendarModalBranchName] = useState<string>('')
    const {companyBranches, ordersData} = useTypedSelector(store => store.userSlice.userData)

    const onCalendarBtnClick = (branchName: string) => {
        setCalendarModalBranchName(branchName)
    }
    
    const handleModalClose = () => {
        setCalendarModalBranchName('')
    }

    const getClosestOrdersList = (branchName: string) => {
        const [todayYear, todayMonth, todayDate] = getDateByFragments(new Date())

        const closestOrders = ordersData[branchName].filter(order => {
            const [orderYear, orderMonth, orderDate] = getDateByFragments(new Date(order.date))

            const orderInBranch = order.branchName === branchName
            const isOrderClosest = orderYear === todayYear
            && orderMonth === todayMonth
            && orderDate >= todayDate
            && orderDate <= todayDate + 3

            return orderInBranch && isOrderClosest
        })

        const ordersByDate: OrdersByDateType = {}

        closestOrders.forEach(order => {
            const [orderYear, orderMonth, orderDate, valueHours, valueMinutes] = getDateByFragments(new Date(order.date))
            const key = `${getFormattedNumber(orderDate)}.${getFormattedNumber(orderMonth + 1)}.${orderYear}`

            const orderObj = {
                ...order,
                time: `${getFormattedNumber(valueHours)}:${getFormattedNumber(valueMinutes)}`,
            }

            if (!ordersByDate[key]) {
                ordersByDate[key] = [orderObj]
            } else {
                ordersByDate[key].push(orderObj)
            }
        })

        return Object.keys(ordersByDate).map(key => (
            <div key={key}>
                <Title level={5}>{key}</Title>
                <List bordered className="closestOrdersList">
                    {ordersByDate[key].map(order => (
                        <Item key={order.time}>
                            <span>Время: <Tag>{order.time}</Tag></span>
                            <span>Заказчик: <Tag>{order.buyerName}</Tag></span>
                            <span>Длительность: <Tag>{order.orderDuration}ч </Tag></span>
                        </Item>
                    ))}
                </List>
            </div>
        ))
    }

    return (
        <>
            <AppModal
                onClose={handleModalClose}
                title={calendarModalBranchName ?? ''}
                open={Boolean(calendarModalBranchName)}
            >
                <UserHallModalContent branchName={calendarModalBranchName}/>
            </AppModal>
            <Layout className="userHallsLayout">
                {companyBranches.map(branch => {
                    return (
                        <div key={branch.name} className="branchBlock">
                            <Title level={3}>{branch.name}</Title>
                            <Typography>{branch.address}</Typography>
                            <div>
                                <YMaps>
                                    <Map height={400} defaultState={{center: branch.coords, zoom: 15}}>
                                        <Placemark 
                                            geometry={branch.coords}
                                        />
                                    </Map>
                                </YMaps>
                                <div>
                                    <Title level={4}>
                                        Ближайшие заказы
                                        <Tooltip title="Подробнее">
                                            <Button onClick={() => onCalendarBtnClick(branch.name)}>
                                                <CalendarOutlined />
                                            </Button>
                                        </Tooltip>
                                    </Title>
                                    {getClosestOrdersList(branch.name)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Layout>
        </>
    )
}