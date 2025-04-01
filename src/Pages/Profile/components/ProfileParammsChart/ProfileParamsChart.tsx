import { Line } from "@ant-design/charts"
import { CompanyOrderType } from "../../../../store/userSlice"

type ProfileParamsChartProps = {
    ordersData: CompanyOrderType[]
}

const getFormattedNumber = (num: number) => num > 9 ? String(num) : `0${num}` 

export const ProfileParamsChart = ({ordersData}: ProfileParamsChartProps) => {
    const ordersByDay: {[key: string]: number} = {}

    ordersData.forEach((order) => {
        const orderDate = new Date(order.date)
        const orderYear = orderDate.getFullYear()
        const orderMonth = getFormattedNumber(orderDate.getMonth() + 1)
        const orderDay = getFormattedNumber(orderDate.getDate())

        const orderDateString = `${orderDay}.${orderMonth}.${orderYear}`

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