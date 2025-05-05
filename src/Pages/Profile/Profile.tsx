import { Layout, Typography } from 'antd';
import './Profile.scss'
import { ProfileParams } from './components';
import { HallMap } from '../../components';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../utils';

const {Title} = Typography

export const Profile = () => {
    const [todayBranchesData, setTodayBranchesData] = useState<{[key: string]: string[]}>({ activeTodayBranches: [], notActiveTodayBranches: []})
    const {userData, branchesActiveData} = useTypedSelector(store => store.userSlice)

    useEffect(() => {

            setTodayBranchesData(
                {
                    activeTodayBranches: branchesActiveData.activeTodayBranches,
                    notActiveTodayBranches: branchesActiveData.notActiveTodayBranches,
                }
            )
    }, [branchesActiveData])

    if (userData) {    
        const placeMarksData = userData.companyBranches.map(el => ({
                ...el, 
                color: todayBranchesData.activeTodayBranches.includes(el.name) ? 'red' : 'green'
            })
        )
    
        return (
            <Layout className="profileMainLayout">
                <Title level={3}>{userData.companyName}</Title>
                <ProfileParams />
                <div className="profileInfo">
                    <HallMap placeMarksData={placeMarksData}/>
                </div>
            </Layout>
        )
    }

    return null
}