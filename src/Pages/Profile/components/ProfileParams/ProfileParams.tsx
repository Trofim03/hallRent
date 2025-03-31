import { PlusOutlined } from "@ant-design/icons"
import { Typography, Flex, Tag, Tooltip, List, Empty } from "antd"
import { useState } from "react"
import { AppModal } from "../../../../components"
import { CompanyBranchType, UserDataType } from "../../types"
import { ProfileParamsChart } from "../ProfileParammsChart"
import { getResultUserInfo } from "./getResultUserInfo"

const {Title} = Typography
const {Item} = List

type ProfileParamsProps = {
    userData: UserDataType & {
        activeTodayBranches: string[], 
        notActiveTodayBranches: string[]
    }
}

export const ProfileParams = ({userData}: ProfileParamsProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [branchToDeleteData, setBranchToDeleteData] = useState<CompanyBranchType | null>(null)

    const {
        activeTodayBranches,
        ordersData,
        notActiveTodayBranches
    } = userData

    const {
        minPrice,
        maxPrice,
        totalSizePremises
    } = getResultUserInfo(userData)

    const onBranchAdd = () => {
        setIsDrawerOpen(true)
    }

    const setDrawerClose = () => {
        setIsDrawerOpen(false)
    }

    const onTagDelete = (e: any, tag: any) => {
        e.preventDefault();
        setBranchToDeleteData(tag)
    }

    const onModalClose = () => {
        setBranchToDeleteData(null)
    }
    
    return (
        <>
            <AppModal 
                open={Boolean(branchToDeleteData)} 
                title={`Вы действительно хотите удалить филиал "${branchToDeleteData?.name}"?`}
                onClose={onModalClose}
            >
                <Flex vertical>
                    <Tooltip><b>Адрес:</b> {branchToDeleteData?.address}</Tooltip>
                </Flex>
            </AppModal>
            <AppModal open={isDrawerOpen} onClose={setDrawerClose} title={'Добавить филиал'}>
                123
            </AppModal>
            <div className="profileParams">
                <div>
                    <Title level={4}>Характеристики компании</Title>
                    <List bordered size="small">
                        <Item>Активных филиалов (сегодня): {activeTodayBranches.length}</Item>
                        <Item>Неактивных филиалов (сегодня): {notActiveTodayBranches.length}</Item>
                        <Item>Минимальная стоимость аренды: {minPrice}р</Item>
                        <Item>Максимальная стоимость аренды: {maxPrice}р</Item>
                        <Item>Общий метраж всех помещений: {totalSizePremises}м³</Item>
                    </List>
                </div>
                <div>
                    <Title level={4}>Текущие филиалы</Title>
                    <Flex wrap={'wrap'} gap={5}>
                        {userData.companyBranches.map(el => {
                            const isBranchActive = activeTodayBranches.includes(el.name)

                            const toolTipTitle = (
                                <>
                                    Адрес: {el.address}<br/>
                                    Сегодня: {isBranchActive ? 'занято' : 'свободно'}
                                </>
                            )

                            return (
                            <Tooltip key={el.name} title={toolTipTitle}>
                                <Tag
                                color={isBranchActive ? 'red' : 'green'} 
                                closable 
                                onClose={(e) => onTagDelete(e, el)}
                                >
                                    {el.name}
                                </Tag>
                            </Tooltip>
                        )
                        })}
                        <Tag icon={<PlusOutlined />} onClick={onBranchAdd} className='branchAddTag'>
                            Добавить
                        </Tag>
                    </Flex>
                    {!ordersData.length ? 
                    <Empty description={'Отсутствуют заказы для отображения'} style={{marginTop: 30}} /> 
                    : <ProfileParamsChart ordersData={ordersData} /> 
                    }
                </div>
            </div>
        </>
    )
}