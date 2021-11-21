import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getFirstValue } from '../../helpers/helpers'

import OptionsGroup from './Options/OptionsGroup'

const KeyWrap = styled.div`
  min-width: 4vw;
  height: 7vh;
  cursor: pointer;
  padding: 0 2px;
  margin: 5px;
  border-radius: 7px;
  background: ${props => props.bgColor};
`

const Key = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7vw;
  color: ${props => props.color};
`

const OptionsPanel = () => {
  const groups = useSelector(state => state.groups)
  const selectGroupName = useSelector(state => state.selectGroup)
  const keys = useSelector(state => state.selectKeys).filter(
    k => k.group === selectGroupName
  )
  const selectGroup = groups.find(group => group.name === selectGroupName)

  return (
    <div className="options-panel">
      <OptionsGroup selectGroup={selectGroup} />
      <div className="group">
        {selectGroupName === 'keyboard' ? (
          <h2 className="group-title">
            change the group of options for selecting and customizing keyboard keys
          </h2>
        ) : keys.length ? (
          keys.map(key => (
            <KeyWrap key={key.id} bgColor={selectGroup.theme.bgColor}>
              <Key color={selectGroup.theme.color}>
                {getFirstValue(key.value) || key.name}
              </Key>
            </KeyWrap>
          ))
        ) : (
          <h2 className="group-title">Group clear...</h2>
        )}
      </div>
    </div>
  )
}

export default OptionsPanel
