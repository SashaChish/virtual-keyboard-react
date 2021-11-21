import { Keyboard, OptionsPanel } from './components/index'

import { AppWrap, Global } from './styled'

function App() {
  return (
    <>
      <Global />
      <AppWrap>
        <Keyboard />
        <OptionsPanel />
      </AppWrap>
    </>
  )
}

export default App
