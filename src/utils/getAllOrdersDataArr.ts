import { CompanyOrderType, UserDataType } from "../store/userSlice";

export const getAllOrdersDataArr = (ordersFromBack: UserDataType['ordersData']) => {
    const resArr: CompanyOrderType[] = []

    Object.values(ordersFromBack).forEach(ordersArr => {
        resArr.push(...ordersArr)
    })

    return resArr
}