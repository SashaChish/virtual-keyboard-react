import React from 'react'

import { functional } from '../../../data'

import KeyboardKey from '../Key/KeyboardKey'

import { GridContainer, KeyWrap } from './styled'

const Functional = () => {
  return (
    <GridContainer>
      {functional.map(key => (
        <KeyWrap key={key.id} gridPos={key.gridPos}>
          <KeyboardKey keyItem={key} />
        </KeyWrap>
      ))}
    </GridContainer>
  )
}

export default Functional
