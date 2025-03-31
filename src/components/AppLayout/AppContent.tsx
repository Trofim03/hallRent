import {Layout} from 'antd'
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

export const AppContent = () => {
    return (
        <Content style={{ margin: '15px' }}>
          <Outlet />
        </Content>
    )
}