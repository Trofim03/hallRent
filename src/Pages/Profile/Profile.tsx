import { Layout, Typography } from 'antd';
// import { useTypedSelector } from "../../utils"
import './Profile.scss'
import { ProfileParams } from './components';
import { UserDataType } from './types';
import { HallMap } from '../../components';
import { getActiveBranchesStatus } from './getActiveBranchesStatus';

const {Title} = Typography

const userData: UserDataType = {
    companyName: 'Макдональдс',
    companyBranches: [
        {
            name: 'Главное здание',
            address: 'ул сквозная',
            coords: [55, 37],
            oneHourPrice: 500,
            premisesSize: 20
        },
        {
            name: 'Кладовка',
            address: 'ул сквозная',
            coords: [56, 38],
            oneHourPrice: 5000,
            premisesSize: 48
        },
    ],
    ordersData: [
        {
            branchName: 'Главное здание',
            orders: 3,
            date: new Date(2024, 10, 1),
            orderDuration: 3
        },
        {
            branchName: 'Главное здание',
            orders: 2,
            date: new Date(2024, 10, 15),
            orderDuration: 3
        },
        {
            branchName: 'Главное здание',
            orders: 10,
            date: new Date(2024, 10, 20),
            orderDuration: 3
        },
        {
            branchName: 'Кладовка',
            orders: 8,
            date: new Date(2024, 10, 2),
            orderDuration: 3
        },
        {
            branchName: 'Кладовка',
            orders: 4,
            date: new Date(2024, 10, 12),
            orderDuration: 3
        },
        {
            branchName: 'Кладовка',
            orders: 6,
            date: new Date(2024, 10, 25),
            orderDuration: 3
        },
        {
            branchName: 'Кладовка',
            orders: 6,
            date: new Date(),
            orderDuration: 3
        },
    ]
}

export const Profile = () => {
    // const {id} = useTypedSelector(store => store.userSlice)

    const {
        activeTodayBranches,
        notActiveTodayBranches
    } = getActiveBranchesStatus(userData)

    const placeMarksData = userData.companyBranches.map(el => ({
            coords: el.coords, 
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