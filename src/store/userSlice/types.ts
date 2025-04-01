export type CompanyBranchType = {
    name: string,
    address: string,
    coords: number[],
    oneHourPrice: number,
    premisesSize: number
}

export type UserRoleType = 'ADMIN' | 'USER' | 'LESSOR' | null

export type CompanyOrderType = {
    branchName: string,
    date: string,
    orderDuration: number
}

export type UserDataType = {
    companyName: string,
    companyBranches: CompanyBranchType[],
    ordersData: CompanyOrderType[],
    role: UserRoleType
}

export type BranchesActiveDataType = {
    activeTodayBranches: string[],
    notActiveTodayBranches: string[]
}

export type IUserState = {
    id: string | null
    userData: UserDataType,
    branchesActiveData: BranchesActiveDataType
}