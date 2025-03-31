export type CompanyBranchType = {
    name: string,
    address: string,
    coords: number[],
    oneHourPrice: number,
    premisesSize: number
}

export type CompanyOrderType = {
    branchName: string,
    orders: number,
    date: Date,
    orderDuration: number
}

export type UserDataType = {
    companyName: string,
    companyBranches: CompanyBranchType[],
    ordersData: CompanyOrderType[]
}