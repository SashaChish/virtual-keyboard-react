import React from 'react'

import { setFontSize } from '../../../../helpers/helpers'

import Icon from '../../Icon/Icon'

import { Key, Row } from './styled'

const Double = ({ keyItem }) => {
  return (
    <Key>
      {keyItem.value.map((value, index) => {
        if (typeof value === 'object') {
          return (
            <Row position={keyItem.position[index]} key={value.name}>
              <Icon name={value.name.toLowerCase()} size="1.3vw" />
            </Row>
          )
        }

        return (
          <Row
            position={keyItem.position[index]}
            key={value}
            fontSize={setFontSize(value)}
          >
            {value}
          </Row>
        )
      })}
    </Key>
  )
}

export default Double
