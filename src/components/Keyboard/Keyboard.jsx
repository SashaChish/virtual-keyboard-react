import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Control from './Control/Control'
import Functional from './Functional/Functional'
import Numeric from './Numeric/Numeric'
import Navigation from './Navigation/Navigation'
import Alphanumeric from './Alphanumeric/Alphanumeric'

import { GridContainer } from './styled'
import Indicator from './Indicator/Indicator'

const Keyboard = () => {
  const theme = useSelector(state => state.theme)
  return (
    <ThemeProvider theme={theme}>
      <GridContainer>
        <Functional />
        <Alphanumeric />
        <Control />
        <Navigation />
        <Numeric />
        <Indicator />
      </GridContainer>
    </ThemeProvider>
  )
}

export default Keyboard
