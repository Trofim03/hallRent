import { Typography, Flex, Tag, Tooltip, List, Empty } from "antd"
import { ProfileParamsChart } from "../ProfileParammsChart"
import { getResultUserInfo } from "./getResultUserInfo"
import { useTypedSelector } from "../../../../utils"

const {Title} = Typography
const {Item} = List

export const ProfileParams = () => {
    const {userData, branchesActiveData} = useTypedSelector(store => store.userSlice)

    const {ordersData} = userData
    const {activeTodayBranches, notActiveTodayBranches} = branchesActiveData

    const {
        minPrice,
        maxPrice,
        totalSizePremises
    } = getResultUserInfo(userData)
    
    return (
        <>
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
                                >
                                    {el.name}
                                </Tag>
                            </Tooltip>
                        )
                        })}
                    </Flex>
                    {!Object.keys(ordersData).length ? 
                    <Empty description={'Отсутствуют заказы для отображения'} style={{marginTop: 30}} /> 
                    : <ProfileParamsChart ordersData={ordersData} /> 
                    }
                </div>
            </div>
        </>
    )
}