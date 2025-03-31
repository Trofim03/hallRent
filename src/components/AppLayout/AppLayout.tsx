import {Layout, Tabs} from 'antd'
import './AppLayout.scss'

import { AppSider } from './AppSider';
import { AppContent } from './AppContent';
import { getLocalStorageItem, useTypedSelector } from '../../utils';
import { LogIn, SignUp } from '../../Pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserState } from '../../store/userSlice';



export const AppLayout = () => {
  const dispatch = useDispatch()
  const {id} = useTypedSelector(store => store.userSlice)

  useEffect(() => {
    const userData = getLocalStorageItem('user')

    if (userData) {
      dispatch(setUserState(userData))
    }
  }, [])

  if (!id) {
    const items = [
      {
        key: 'logIn',
        label: 'Войти',
        children: <LogIn />,
      },
      {
        key: 'signUp',
        label: 'Регистрация',
        children: <SignUp />,
      }
    ];

    return (
      <Layout 
        style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }} 
        >
          <Tabs items={items} centered/>
        </Layout>
    )
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout>
        <AppContent />
      </Layout>
    </Layout>
  )
}