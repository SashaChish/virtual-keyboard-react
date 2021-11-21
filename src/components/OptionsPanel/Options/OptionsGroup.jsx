import { useState } from 'react'
import { SketchPicker } from 'react-color'
import { useDispatch, useSelector } from 'react-redux'

import { addGroup, changeSelectGroup, changeGroupTheme } from '../../../redux/actions'

const OptionsGroup = ({ selectGroup }) => {
  const [selectOption, setSelectOption] = useState('color')
  const dispatch = useDispatch()
  const groups = useSelector(state => state.groups)
  const color = groups.find(group => group.name === selectGroup.name).theme[selectOption]
  const keyboardThemePreset = groups.find(({ name }) => name === 'keyboard').theme
  const handleSelectColor = color => {
    const selectTheme = {
      [selectOption]: color.hex,
    }
    dispatch(changeGroupTheme(selectTheme, selectGroup.name))
  }

  const handleSelectOption = e => setSelectOption(e.target.value)
  const handleSelectGroup = e => {
    dispatch(changeSelectGroup(e.target.value))
  }

  localStorage.setItem('themePreset', JSON.stringify(keyboardThemePreset))
  return (
    <div className="group-global">
      <SketchPicker color={color} onChangeComplete={handleSelectColor} />
      <div className="options-container">
        <h2>Options</h2>
        <div className="options-wrap">
          <div>
            <select className="select-group" onChange={handleSelectGroup}>
              {groups.map(group => (
                <option key={group.name}>{group.name}</option>
              ))}
            </select>
            <button onClick={() => dispatch(addGroup())}>add group</button>
          </div>
          <select className="select-group" onChange={handleSelectOption}>
            <option value="color">text color</option>
            <option value="bgColor">key color</option>
            {selectGroup.name === 'keyboard' && (
              <option value="logoColor">logo color</option>
            )}
          </select>
        </div>
      </div>
    </div>
  )
}

export default OptionsGroup
