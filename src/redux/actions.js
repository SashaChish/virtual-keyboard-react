import {
  ADD_KEY,
  ADD_GROUP,
  CHANGE_SELECT_GROUP,
  CHANGE_GROUP_THEME,
} from './actionTypes'


export const addKey = key => {
  return {
    type: ADD_KEY,
    payload: {
      key,
    },
  }
}

export const addGroup = () => {
  return {
    type: ADD_GROUP,
  }
}

export const changeSelectGroup = group => {
  return {
    type: CHANGE_SELECT_GROUP,
    payload: {
      group,
    },
  }
}

export const changeGroupTheme = (theme, name) => {
  return {
    type: CHANGE_GROUP_THEME,
    payload: {
      name,
      theme,
    },
  }
}
