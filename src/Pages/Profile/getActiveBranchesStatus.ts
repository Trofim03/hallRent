import { getArrayFromMapSet } from "../../utils"
import { UserDataType } from "./types"

export const getActiveBranchesStatus = (userData: UserDataType) => {
    const notActiveTodayBranches = new Map()
    const activeTodayBranches = new Set()

    userData.companyBranches.forEach(branch => notActiveTodayBranches.set(branch.name, 1))

    const today = new Date()

    const todayYear = today.getFullYear()
    const todayMonth = today.getMonth()
    const todayDate = today.getDate()

    userData.ordersData.forEach(order => {
        const orderYear = order.date.getFullYear()
        const orderMonth = order.date.getMonth()
        const orderDate = order.date.getDate()

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