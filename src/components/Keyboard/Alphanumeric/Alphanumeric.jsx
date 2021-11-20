import React from 'react'

import { alphanumeric } from '../../../data'

import KeyboardKey from '../Key/KeyboardKey'

import { GridContainer, KeyWrap } from './styled'

const Alphanumeric = () => {
  return (
    <GridContainer>
      {alphanumeric.map(key => (
        <KeyWrap key={key.id} gridPos={key.gridPos}>
          <KeyboardKey keyItem={key} />
        </KeyWrap>
      ))}
    </GridContainer>
  )
}

export default Alphanumeric
