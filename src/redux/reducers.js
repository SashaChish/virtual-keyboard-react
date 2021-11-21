import { CHANGE_COLOR, CHANGE_BACKGROUND, CHANGE_LOGO_COLOR } from './actions'

const initColors = {
  theme: {
    color: localStorage.getItem('color') || '#000000',
    bgColor: localStorage.getItem('bgColor') || '#ffffff',
    logoColor: localStorage.getItem('logoColor') || '#ffffff',
  },
}

export const colors = (state = initColors, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        theme: {
          ...state.theme,
          color: action.payload.color,
        },
      }
    case CHANGE_BACKGROUND:
      return {
        ...state,
        theme: {
          ...state.theme,
          bgColor: action.payload.color,
        },
      }
    case CHANGE_LOGO_COLOR:
      return {
        ...state,
        theme: {
          ...state.theme,
          logoColor: action.payload.color,
        },
      }
    default:
      return state
  }
}
