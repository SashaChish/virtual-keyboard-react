import { control } from '../../../data'

import KeyboardKey from '../Key/KeyboardKey'

import { GridContainer, KeyWrap } from './styled'

const Control = ({ keys, addSelectKey }) => {
  return (
    <GridContainer>
      {control.map(key => (
        <KeyWrap
          key={key.id}
          select={keys.find(k => k.id === key.id)}
          onClick={() => addSelectKey(key)}
        >
          <KeyboardKey keyItem={key} />
        </KeyWrap>
      ))}
    </GridContainer>
  )
}

export default Control
