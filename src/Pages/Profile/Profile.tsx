import { Layout, Spin, Typography } from 'antd';
import { useTypedSelector } from "../../utils"
import './Profile.scss'
import { ProfileParams } from './components';
import { HallMap } from '../../components';
import { getActiveBranchesStatus } from './getActiveBranchesStatus';
import { useEffect, useState } from 'react';
import { doc,  getDoc, getFirestore} from 'firebase/firestore';
import { UserDataType } from '../../store/userSlice';

const {Title} = Typography

export const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [userData, setUserData] = useState<UserDataType | null>(null)
    const {id} = useTypedSelector(store => store.userSlice)

    useEffect(() => {
        if (id) {
            const firebaseDBRef = doc(getFirestore() as any, `users`, id);
    
            getDoc(firebaseDBRef).then((snapshot) => {
                setUserData(snapshot.data() as UserDataType)
                setIsLoading(false)
            })
        }
    }, [])

    if (userData && !isLoading) {
        const {
            activeTodayBranches,
            notActiveTodayBranches
        } = getActiveBranchesStatus(userData)
    
        const placeMarksData = userData.companyBranches.map(el => ({
                ...el, 
                color: activeTodayBranches.includes(el.name) ? 'red' : 'green'
            })
        )
    
        return (
            <Layout className="profileMainLayout">
                <Title level={3}>{userData.companyName}</Title>
                <ProfileParams 
                    userData={{
                        ...userData, 
                        activeTodayBranches, 
                        notActiveTodayBranches
                    }} 
                />
                <div className="profileInfo">
                    <HallMap placeMarksData={placeMarksData}/>
                </div>
            </Layout>
        )
    }

    return <Spin size="large" />
}