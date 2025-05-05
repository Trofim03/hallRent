import { Calendar, Tag } from "antd"
import { useTypedSelector } from "../../utils"
import dayjs, { Dayjs } from "dayjs"
import { DAYJS_DATE_FORMAT } from "../../constants"
import { CompanyOrderType } from "../../store/userSlice"
import './UserHallModalContent.scss'

export const UserHallModalContent = ({branchName}: {branchName:string}) => {
    const {ordersData} = useTypedSelector(store => store.userSlice.userData)

    const currentBranchOrders = ordersData[branchName]

    const ordersByDate: {[dateKey: string]: CompanyOrderType[]} = {}

    currentBranchOrders.forEach(order => {
        const key = dayjs(order.date).format(DAYJS_DATE_FORMAT)

        if (ordersByDate[key]) {
            ordersByDate[key].push(order)
        } else {
            ordersByDate[key] = [order]
        }
    })

    const cellRender = (current: Dayjs) => {
        const dateKey = current.format(DAYJS_DATE_FORMAT)

        if (ordersByDate[dateKey]) {
            return ordersByDate[dateKey].map(order => (
                    <div className="calendarOrderLine">
                        <Tag>{order.buyerName}</Tag>
                        <Tag>{order.orderDuration}ч</Tag>
                    </div>
                ))
        }

        return null
    }
    
    return (
        <>
            <Calendar cellRender={cellRender} />
        </>
    )
}