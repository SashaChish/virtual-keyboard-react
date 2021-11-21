import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Control from './Control/Control'
import Functional from './Functional/Functional'
import Numeric from './Numeric/Numeric'
import Navigation from './Navigation/Navigation'
import Alphanumeric from './Alphanumeric/Alphanumeric'
import Indicator from './Indicator/Indicator'

import { addKey } from '../../redux/actions'

import { GridContainer } from './styled'

const Keyboard = () => {
  const selectGroup = useSelector(state => state.selectGroup)
  const keys = useSelector(state => state.selectKeys).filter(
    ({ group }) => group === selectGroup
  )
  const keyboardTheme = useSelector(state => state.groups).find(
    ({ name }) => name === 'keyboard'
  ).theme
  const dispatch = useDispatch()

  const addSelectKey = key => {
    if (selectGroup !== 'keyboard') dispatch(addKey(key))
  }

  const props = {
    keys,
    addSelectKey,
  }

  return (
    <ThemeProvider theme={keyboardTheme}>
      <GridContainer>
        <Functional {...props} />
        <Alphanumeric {...props} />
        <Control {...props} />
        <Navigation {...props} />
        <Numeric {...props} />
        <Indicator />
      </GridContainer>
    </ThemeProvider>
  )
}

export default Keyboard
