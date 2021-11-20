import React from 'react'

import { navigation } from '../../../data'

import KeyboardKey from '../Key/KeyboardKey'

import { GridContainer, KeyWrap } from './styled'

const Navigation = () => {
  return (
    <GridContainer>
      {navigation.map(key => (
        <KeyWrap key={key.id} gridPos={key.gridPos}>
          <KeyboardKey keyItem={key} />
        </KeyWrap>
      ))}
    </GridContainer>
  )
}

export default Navigation
