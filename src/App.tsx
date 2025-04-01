import { ConfigProvider } from 'antd'
import './App.scss'
import { AppRouter } from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import ruRU from 'antd/locale/ru_RU';

export const App = () => {

  return (
    <Provider store={store}>
      <ConfigProvider 
        locale={ruRU}
        theme={{ cssVar: true, hashed: false }}
      >
        <AppRouter />
      </ConfigProvider>
    </Provider>
  )
}
