import { Line } from "@ant-design/charts"
import { CompanyOrderType } from "../../../../store/userSlice"
import { getDateByFragments, getFormattedNumber } from "../../../../utils"

type ProfileParamsChartProps = {
    ordersData: CompanyOrderType[]
}

export const ProfileParamsChart = ({ordersData}: ProfileParamsChartProps) => {
    const ordersByDay: {[key: string]: number} = {}

    ordersData.forEach((order) => {
        const orderDate = new Date(order.date)
        const [orderYear, orderMonth, orderDay] = getDateByFragments(orderDate)

        const orderDateString = `${orderDay}.${getFormattedNumber(orderMonth + 1)}.${getFormattedNumber(orderYear)}`

        const key = `${order.branchName}-${orderDateString}`

        if (ordersByDay[key]) {
            ordersByDay[key] += 1
        } else {
            ordersByDay[key] = 1
        }
    })

    const dataForParse = Object.keys(ordersByDay).map(key => {
        const [branchName, date] = key.split('-')
        const orderCount = ordersByDay[key]

        return {
            date,
            orders: orderCount,
            branchName
        }
    })

    return (
        <Line
            height={400}
            data={dataForParse}
            xField={'date'}
            yField={'orders'}
            colorField={'branchName'}
        />
    )
}