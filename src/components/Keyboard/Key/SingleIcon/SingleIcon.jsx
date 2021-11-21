import Icon from '../../Icon/Icon'

import { KeyIconWrap } from './styled'

const SingleIcon = ({ name }) => {
  return (
    <KeyIconWrap>
      <Icon name={name.toLowerCase()} size="1.5vw" />
    </KeyIconWrap>
  )
}

export default SingleIcon
