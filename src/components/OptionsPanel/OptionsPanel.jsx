import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SketchPicker } from 'react-color'

import { changeColor, changeBackground, changeLogoColor } from '../../redux/actionTypes'

const OptionsPanel = () => {
  const [selected, setSelected] = useState('color')
  const color = useSelector(state => state.theme[selected])

  const dispatch = useDispatch()

  const handleHex = color => {
    if (selected === 'color') dispatch(changeColor(color.hex))
    else if (selected === 'bgColor') dispatch(changeBackground(color.hex))
    else if (selected === 'logoColor') dispatch(changeLogoColor(color.hex))
  }

  const handleSelected = e => setSelected(e.target.value)

  localStorage.setItem(selected, color)
  return (
    <div className="options-panel">
      <div className="group-global">
        <div className="options-container">
          <label htmlFor="selected-group">select options</label>
          <select id="select" className="selected-group" onChange={handleSelected}>
            <option value="color">text color</option>
            <option value="bgColor">key color</option>
            <option value="logoColor">logo color</option>
          </select>
        </div>
        <SketchPicker color={color} onChangeComplete={handleHex} />
      </div>
    </div>
  )
}

export default OptionsPanel
