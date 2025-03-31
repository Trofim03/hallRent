import { Line } from "@ant-design/charts"
import { CompanyOrderType } from "../../types"

type ProfileParamsChartProps = {
    ordersData: CompanyOrderType[]
}

export const ProfileParamsChart = ({ordersData}: ProfileParamsChartProps) => {
    return (
        <Line
            data={ordersData}
            xField={'date'}
            yField={'orders'}
            colorField={'branchName'}
        />
    )
}