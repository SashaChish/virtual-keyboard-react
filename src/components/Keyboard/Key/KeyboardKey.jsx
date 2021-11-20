import React from 'react'

import Single from './Single/Single'
import SingleIcon from './SingleIcon/SingleIcon'
import Double from './Double/Double'

const KeyboardKey = ({ keyItem }) => {
  switch (keyItem.type) {
    case 'single':
      return <Single keyItem={keyItem} />
    case 'singleIcon':
      return <SingleIcon name={keyItem.name}/>
    case 'double':
      return <Double keyItem={keyItem} />
    default:
      return <div></div>
  }
}

export default KeyboardKey
