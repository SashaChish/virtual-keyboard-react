import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-area: functional;
  grid-template-columns: repeat(20, 0.5fr);
  gap: 5px;
  margin-bottom: 25px;
`

export const KeyWrap = styled.div`
  cursor: pointer;
  padding: 0 2px;
	border-radius: 7px;
  background: ${({ theme }) => theme.bgColor};
  ${props => {
    return (
      props.gridPos &&
      `
			grid-column-start: ${props.gridPos.colStart || 'auto'};
			`
    )
  }}
`
