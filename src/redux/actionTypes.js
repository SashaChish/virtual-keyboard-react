import { CHANGE_BACKGROUND, CHANGE_COLOR, CHANGE_LOGO_COLOR } from './actions'

export const changeColor = color => {
  return {
    type: CHANGE_COLOR,
    payload: {
      color,
    },
  }
}

export const changeBackground = color => {
  return {
    type: CHANGE_BACKGROUND,
    payload: {
      color,
    },
  }
}

export const changeLogoColor = color => {
	return {
		type: CHANGE_LOGO_COLOR,
		payload: {
			color
		}
	}
}
