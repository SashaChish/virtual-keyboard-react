import React from 'react'

import { numeric } from '../../../data'

import KeyboardKey from '../Key/KeyboardKey'

import { GridContainer, KeyWrap } from './styled'

const Numeric = () => {
  return (
    <GridContainer>
      {numeric.map(key => (
        <KeyWrap key={key.id} gridPos={key.gridPos}>
          <KeyboardKey keyItem={key} />
        </KeyWrap>
      ))}
    </GridContainer>
  )
}

export default Numeric
