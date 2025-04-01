import { UserDataType } from "../../store/userSlice"
import { getArrayFromMapSet, getDateByFragments } from "../../utils"

export const getActiveBranchesStatus = (userData: UserDataType) => {
    const notActiveTodayBranches = new Map()
    const activeTodayBranches = new Set()

    userData.companyBranches.forEach(branch => notActiveTodayBranches.set(branch.name, 1))

    const today = new Date()

    const [todayYear,todayMonth,todayDate] = getDateByFragments(today)

    userData.ordersData.forEach(order => {
        const orderToDate = new Date(order.date)

        const [orderYear, orderMonth, orderDate] = getDateByFragments(orderToDate)

        const isTodayOrder = orderYear === todayYear
        && todayMonth === orderMonth
        && todayDate === orderDate

        if (isTodayOrder) {
            notActiveTodayBranches.delete(order.branchName)
            activeTodayBranches.add(order.branchName)
        }
    })

    return {
        activeTodayBranches: getArrayFromMapSet(activeTodayBranches),
        notActiveTodayBranches: getArrayFromMapSet(notActiveTodayBranches, true)
    }
}