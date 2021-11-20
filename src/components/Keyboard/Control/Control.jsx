import React from 'react'

import { control } from '../../../data'

import KeyboardKey from '../Key/KeyboardKey'

import { GridContainer, KeyWrap } from './styled'

const Control = () => {
  return (
    <GridContainer>
      {control.map(key => (
        <KeyWrap key={key.id}>
          <KeyboardKey keyItem={key} />
        </KeyWrap>
      ))}
    </GridContainer>
  )
}

export default Control
