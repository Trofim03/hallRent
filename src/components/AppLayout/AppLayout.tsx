import {Layout, Spin, Tabs} from 'antd'
import './AppLayout.scss'
import { AppSider } from './AppSider';
import { getLocalStorageItem, useTypedSelector } from '../../utils';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserBranchesActiveData, setUserData, setUserId } from '../../store/userSlice';
import { Outlet } from 'react-router-dom';
import { loginTabsItems } from './constants';
import { getActiveBranchesStatus } from '../../Pages/Profile/getActiveBranchesStatus';
import { getUserDataRequestAction } from '../../utils/api/getUserDataRequestAction';

const {Content} = Layout

export const AppLayout = () => {
  const dispatch = useDispatch()
  const {id} = useTypedSelector(store => store.userSlice)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const userId = getLocalStorageItem('userId')

    if (userId) {
      dispatch(setUserId(userId))
    }
  }, [])

  useEffect(() => {
    if (id) {
      setIsLoading(true)
      getUserDataRequestAction(id).then((userDataResponse) => {
        const {
            activeTodayBranches,
            notActiveTodayBranches
        } = getActiveBranchesStatus(userDataResponse)
  
        dispatch(setUserBranchesActiveData({ activeTodayBranches, notActiveTodayBranches}))
        dispatch(setUserData(userDataResponse))

        setIsLoading(false)
      })
    }
  }, [id])

  if (!id) {
    return (
      <Layout 
        style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}
            className='logInLayout'
        >
          <Tabs items={loginTabsItems} centered/>
        </Layout>
    )
  }

  return (
    <Spin size='large' spinning={isLoading}>
      <Layout style={{ minHeight: '100vh' }}>
        <AppSider />
        <Content style={{ padding: '15px', maxHeight: '100vh' }}>
          <Outlet key={location.pathname} />
        </Content>
      </Layout>
    </Spin>
  )
}