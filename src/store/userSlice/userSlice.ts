import { createSlice } from "@reduxjs/toolkit";
import { BranchesActiveDataType, IUserState, UserDataType } from "./types";

const initialUserState: IUserState = {
    id: null, 
    userData: {
        companyName: '',
        companyBranches: [],
        ordersData: [],
        role: null
    },
    branchesActiveData: {
        activeTodayBranches: [],
        notActiveTodayBranches: []
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserState,
    reducers: {
        setUserData: (store, {payload}: {payload: UserDataType}) => {
            return {
                ...store,
                userData: {
                    ...payload
                }
            }
        },
        setUserId: (store, {payload}: {payload: string}) => {
            return {
                ...store,
                id: payload
            }
        },
        setUserBranchesActiveData: (store, {payload}: {payload: BranchesActiveDataType}) => {
            return {
                ...store,
                branchesActiveData: payload
            }
        },
        clearUserState: () => {
            return {
                ...initialUserState
            }
        },
    }
})