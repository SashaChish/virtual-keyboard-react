import { Keyboard } from './components/index'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { AppWrap, Global } from './styled'

function App() {
  return (
    <Provider store={store}>
      <Global />
      <AppWrap>
        <Keyboard />
      </AppWrap>
    </Provider>
  )
}

export default App
