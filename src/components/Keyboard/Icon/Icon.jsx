import { BsWindows, BsArrowLeftRight } from 'react-icons/bs'
import { MdSpaceBar, MdKeyboardBackspace } from 'react-icons/md'
import { CgMenuBoxed } from 'react-icons/cg'
import { AiOutlineEnter } from 'react-icons/ai'
import {
  HiArrowNarrowDown,
  HiArrowNarrowUp,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from 'react-icons/hi'
import { useSelector } from 'react-redux'

const Icon = ({ name, ...props }) => {
  const color = useSelector(state => state.groups).find(({ name }) => name === 'keyboard')
    .theme.color

  switch (name) {
    case 'meta':
      return <BsWindows color={color} {...props} />
    case 'space':
      return <MdSpaceBar color={color} {...props} size="3vw" />
    case 'contextmenu':
      return <CgMenuBoxed color={color} {...props} />
    case 'arrowup':
      return <HiArrowNarrowUp color={color} {...props} />
    case 'arrowdown':
      return <HiArrowNarrowDown color={color} {...props} />
    case 'arrowright':
      return <HiArrowNarrowRight color={color} {...props} />
    case 'arrowleft':
      return <HiArrowNarrowLeft color={color} {...props} />
    case 'tab-icon':
      return <BsArrowLeftRight color={color} {...props} size="1vw" />
    case 'backspace':
      return <MdKeyboardBackspace color={color} {...props} size="2vw" />
    case 'enter':
      return <AiOutlineEnter color={color} {...props} size="2.5vw" />
    default:
      return <div></div>
  }
}

export default Icon
