import { userSlice } from './userSlice'

export {userSlice} from './userSlice'
export type {IUserState} from './userSlice'

export const {
    setUserState,
    clearUserState
} = userSlice.actions