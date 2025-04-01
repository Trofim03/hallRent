import { UserDataType } from "../../../../store/userSlice"


export const getResultUserInfo = (userData: UserDataType) => {
    let minPrice = userData.companyBranches[0].oneHourPrice
    let maxPrice = userData.companyBranches[0].oneHourPrice
    let totalSizePremises = 0

    userData.companyBranches.forEach(branch => {
        // Находим минимальные и максимальные цены за час
        if (branch.oneHourPrice > maxPrice) {
            maxPrice = branch.oneHourPrice
        } else if (branch.oneHourPrice < minPrice) {
            minPrice = branch.oneHourPrice
        }

        // Общая квадратура помещений
        totalSizePremises += branch.premisesSize
    })

    return {
        minPrice,
        maxPrice,
        totalSizePremises
    }
}