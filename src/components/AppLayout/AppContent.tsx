import {Layout} from 'antd'
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

export const AppContent = () => {
    return (
        <Content style={{ padding: '15px', maxHeight: '100vh' }}>
          <Outlet />
        </Content>
    )
}