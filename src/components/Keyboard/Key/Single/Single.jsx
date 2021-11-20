import React from 'react'

import { setFontSize } from '../../../../helpers/helpers'

import { Key } from './styled'

const Single = ({ keyItem }) => {
  return <Key fontSize={setFontSize(keyItem.value)}>{keyItem.value}</Key>
}

export default Single
