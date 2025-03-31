export type CompanyBranchType = {
    name: string,
    address: string,
    coords: number[]
}

export type CompanyOrderType = {
    branchName: string,
    orders: number,
    date: Date,
    orderDuration: number
}

export type UserDataType = {
    companyName: string,
    userCompanyCounter: number,
    userNotActiveCompanyCounter: number,
    minPrice: number,
    maxPrice: number,
    totalSizePremises: number,
    activeOrders: number,
    companyBranches: CompanyBranchType[],
    ordersData: CompanyOrderType[]
}