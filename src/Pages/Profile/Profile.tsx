import { Layout, Typography } from 'antd';
// import { useTypedSelector } from "../../utils"
import './Profile.scss'
import { ProfileParams } from './components';
import { UserDataType } from './types';
import { HallMap } from '../../components';

const {Title} = Typography

const userData: UserDataType = {
    companyName: 'Макдональдс',
    userCompanyCounter: 4,
    userNotActiveCompanyCounter: 2,
    minPrice: 500,
    maxPrice: 5000,
    totalSizePremises: 56,
    activeOrders: 6,
    companyBranches: [
        {
            name: 'Главное здание',
            address: 'ул сквозная',
            coords: [55, 37]
        },
        {
            name: 'Кладовка',
            address: 'ул сквозная',
            coords: [56, 38]
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
        }
    ]
}

export const Profile = () => {
    // const {id} = useTypedSelector(store => store.userSlice)

    return (
        <Layout className="profileMainLayout">
            <Title level={3}>{userData.companyName}</Title>
            <ProfileParams userData={userData} />
            <div className="profileInfo">
                <HallMap coords={userData.companyBranches.map(el => el.coords)}/>
            </div>
        </Layout>
    )
}