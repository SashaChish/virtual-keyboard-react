import {
  ADD_KEY,
  ADD_GROUP,
  CHANGE_SELECT_GROUP,
  CHANGE_GROUP_THEME,
} from './actionTypes'

const initCustomTheme = {
  color: '#000000',
  bgColor: '#ffffff',
}

const initKeyboardTheme = {
  color: '#9013fe',
  bgColor: '#ffffff',
  logoColor: '#e23f3f',
}

const initState = {
  selectKeys: [],
  selectGroup: 'keyboard',
  groups: [
    {
      name: 'keyboard',
      theme: JSON.parse(localStorage.getItem('themePreset')) || initKeyboardTheme,
    },
    {
      name: 'custom group-1',
      theme: initCustomTheme,
    },
  ],
}

console.log(JSON.parse(localStorage.getItem('themePreset')))

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_KEY: {
      const find = state.selectKeys.find(key => key.id === action.payload.key.id)

      if (!find)
        return {
          ...state,
          selectKeys: [
            ...state.selectKeys,
            Object.assign(action.payload.key, { group: state.selectGroup }),
          ],
        }

      return state
    }
    case ADD_GROUP:
      return {
        ...state,
        groups: [
          ...state.groups,
          { name: `custom group-${state.groups.length}`, theme: initCustomTheme },
        ],
      }
    case CHANGE_SELECT_GROUP:
      return {
        ...state,
        selectGroup: action.payload.group,
      }
    case CHANGE_GROUP_THEME:
      return {
        ...state,
        groups: state.groups.map(group => {
          if (group.name === action.payload.name)
            return {
              name: group.name,
              theme: {
                ...group.theme,
                ...action.payload.theme,
              },
            }

          return group
        }),
      }
    default:
      return state
  }
}
