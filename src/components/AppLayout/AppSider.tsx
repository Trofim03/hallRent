import { Button, Layout, Menu, MenuProps } from "antd"
import {
    UserOutlined, LogoutOutlined
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUserState } from "../../store/userSlice";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <NavLink to='/'>Профиль</NavLink>, 
    key: 'profile', 
    icon: <UserOutlined />
  },
  {
    label: 'Выйти', 
    key: 'logOut', 
    icon: <LogoutOutlined />
  }
];

export const AppSider = () => {
  const dispatch = useDispatch()

  const onItemSelect = ({key}) => {
    if (key === items[1]?.key) {
      dispatch(clearUserState())
      localStorage.removeItem('user')
    }
  }
  
    return (
        <Sider collapsible>
            <Menu mode="inline" items={items} theme="dark" defaultSelectedKeys={['profile']} onClick={onItemSelect}/>
        </Sider>
    )
}