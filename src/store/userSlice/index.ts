import { userSlice } from './userSlice'

export {userSlice} from './userSlice'
export type {CompanyBranchType, UserRoleType,CompanyOrderType, UserDataType, IUserState} from './types'

export const {
    setUserData,
    clearUserState,
    setUserBranchesActiveData,
    setUserId
} = userSlice.actions