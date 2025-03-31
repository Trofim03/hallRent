import { createSlice } from "@reduxjs/toolkit";

export type UserRoleType = 'ADMIN' | 'USER' | null

export type IUserState = {
    id: string | null
    role: UserRoleType
}

const initialUserState: IUserState = {id: null, role: null}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserState,
    reducers: {
        setUserState: (store, {payload}: {payload: IUserState}) => {
            return {
                ...payload
            }
        },
        clearUserState: () => {
            return {
                ...initialUserState
            }
        },
    }
})