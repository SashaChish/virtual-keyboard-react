import { alphanumeric } from '../../../data'

import KeyboardKey from '../Key/KeyboardKey'

import { GridContainer, KeyWrap } from './styled'

const Alphanumeric = ({ keys, addSelectKey }) => {
  return (
    <GridContainer>
      {alphanumeric.map(key => (
        <KeyWrap
          key={key.id}
          gridPos={key.gridPos}
          select={keys.find(k => k.id === key.id)}
          onClick={() => addSelectKey(key)}
        >
          <KeyboardKey keyItem={key} />
        </KeyWrap>
      ))}
    </GridContainer>
  )
}

export default Alphanumeric
