import { ConfigProvider } from 'antd'
import './App.scss'
import { AppRouter } from './router'
import { Provider } from 'react-redux'
import { store } from './store'

export const App = () => {

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{ cssVar: true, hashed: false }}
      >
        <AppRouter />
      </ConfigProvider>
    </Provider>
  )
}
