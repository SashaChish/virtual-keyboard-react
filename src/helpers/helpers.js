export const setFontSize = value => {
  const length = value.split(' ').join('').length

  if (length >= 2) return '.8vw'

  return '1vw'
}

export const getFirstValue = value => {
  if (typeof value === 'object') return value[0]

  return value
}
