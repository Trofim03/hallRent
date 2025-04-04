import { Layout, Spin, Typography } from 'antd';
import { useTypedSelector } from "../../utils"
import './Profile.scss'
import { ProfileParams } from './components';
import { HallMap } from '../../components';
import { getActiveBranchesStatus } from './getActiveBranchesStatus';
import { useEffect, useState } from 'react';
import { setUserBranchesActiveData, setUserData, UserDataType } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../api';

const {Title} = Typography

export const Profile = () => {
    const  dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [userRequestData, setUserRequestData] = useState<UserDataType | null>(null)
    const [todayBranchesData, setTodayBranchesData] = useState<{[key: string]: string[]}>({ activeTodayBranches: [], notActiveTodayBranches: []})
    const {id} = useTypedSelector(store => store.userSlice)

    useEffect(() => {
        if (id) {
            getUserData(id).then((snapshot) => {
                setUserRequestData(snapshot.data() as UserDataType)
                setIsLoading(false)
            })
        }
    }, [])

    useEffect(() => {
        if (userRequestData) {
            const {
                activeTodayBranches,
                notActiveTodayBranches
            } = getActiveBranchesStatus(userRequestData)

            setTodayBranchesData(
                {
                    activeTodayBranches,
                    notActiveTodayBranches
                }
            )
            dispatch(setUserBranchesActiveData({ activeTodayBranches, notActiveTodayBranches}))
            dispatch(setUserData(userRequestData))
        }
    }, [userRequestData])

    if (userRequestData && !isLoading) {    
        const placeMarksData = userRequestData.companyBranches.map(el => ({
                ...el, 
                color: todayBranchesData.activeTodayBranches.includes(el.name) ? 'red' : 'green'
            })
        )
    
        return (
            <Layout className="profileMainLayout">
                <Title level={3}>{userRequestData.companyName}</Title>
                <ProfileParams />
                <div className="profileInfo">
                    <HallMap placeMarksData={placeMarksData}/>
                </div>
            </Layout>
        )
    }

    return <Spin size="large" />
}