import { Line } from "@ant-design/charts"
import { UserDataType } from "../../../../store/userSlice"
import { getAllOrdersDataArr, getDateByFragments, getFormattedNumber } from "../../../../utils"
import { renderToString } from "react-dom/server"

type ProfileParamsChartProps = {
    ordersData: UserDataType['ordersData']
}

type TooltipItemType = {
    color: string,
    name: string,
    value: number
}

type SortedItemsType = {
    [color: string]: {
        [key: string]: number | string
    }
}

export const ProfileParamsChart = ({ordersData}: ProfileParamsChartProps) => {
    const ordersByDay: {[key: string]: number} = {}

    getAllOrdersDataArr(ordersData).forEach((order) => {
        const orderDate = new Date(order.date)
        const [orderYear, orderMonth, orderDay] = getDateByFragments(orderDate)

        const orderDateString = `${getFormattedNumber(orderDay)}.${getFormattedNumber(orderMonth + 1)}.${orderYear}`

        const key = `${order.branchName}-${orderDateString}`

        if (ordersByDay[key]) {
            ordersByDay[key] += 1
        } else {
            ordersByDay[key] = 1
        }
    })

    const renderTooltip = (items: TooltipItemType[], blockTitle: string) => {
        const sortedItems = items.reduce((acc: SortedItemsType, el) => {
            if (!acc[el.color]) {
                acc[el.color] = {}
            }

            if (el.name === 'orders' || el.name === 'date') {
                acc[el.color][el.name] = el.value
            } else {
                acc[el.color]['title'] = el.name
            }

            return acc
        }, {})

        const renderArr: string[] = []

        Object.keys(sortedItems).forEach(key => {
            if(Object.keys(sortedItems[key]).length !== 1) {
                const {orders, date, title} = sortedItems[key]

                const style = {
                    '--color': key
                } as React.CSSProperties

                const component = (
                    <ul style={style} className="tooltipList">
                        <li><span></span>{title ?? blockTitle.split(',')[1]}</li>
                        <li><span></span>Заказов: {orders}</li>
                        <li><span></span>День: {date}</li>
                    </ul>
                )

                renderArr.push(renderToString(component))
            }
        })

        return renderArr.join('')
    }

    const dataForParse = Object.keys(ordersByDay).map(key => {
        const [branchName, date] = key.split('-')
        const orderCount = ordersByDay[key]

        return {
            date,
            orders: orderCount,
            branchName
        }
    })
    .sort((a, b) => a.date > b.date ? 1 : -1)

    return (
        <Line
            height={400}
            data={dataForParse}
            xField={'date'}
            yField={'orders'}
            colorField={'branchName'}
            axis={{
                y: {
                    title: 'Заказы'
                }
            }}
            point={{
                shapeField: 'circle',
                sizeField: 4
            }}
            interaction={{
                tooltip: {
                    marker: false,
                    render: (_: string, { title, items }: {items: TooltipItemType[], title: string}) => renderTooltip(items, title),
                },
            }}
            style={{
                lineWidth: 2,
            }}
        />
    )
}