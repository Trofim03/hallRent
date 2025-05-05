import { Layout, Menu, MenuProps } from "antd"
import {
    UserOutlined, LogoutOutlined, HomeOutlined
} from '@ant-design/icons';
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUserState } from "../../store/userSlice";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <NavLink to='/'>Профиль</NavLink>, 
    key: '/', 
    icon: <UserOutlined />
  },
  {
    label: <NavLink to='/user_halls'>Мои помещения</NavLink>, 
    key: '/user_halls', 
    icon: <HomeOutlined />
  },
  {
    label: 'Выйти', 
    key: 'logOut', 
    icon: <LogoutOutlined />
  }
];

export const AppSider = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const onItemSelect = ({key}: {key: string}) => {
    if (key === items[items.length - 1]?.key) {
      dispatch(clearUserState())
      localStorage.removeItem('userId')
    }
  }
  
    return (
        <Sider collapsible>
            <Menu mode="inline" items={items} theme="dark" defaultSelectedKeys={[location.pathname]} onClick={onItemSelect}/>
        </Sider>
    )
}