import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-area: numeric;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
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
			grid-row-start: ${props.gridPos.rowStart || 'auto'};
			grid-row-end: ${props.gridPos.rowEnd || 'auto'};
			grid-column-start: ${props.gridPos.colStart || 'auto'};
			grid-column-end: ${props.gridPos.colEnd || 'auto'};
			`
    )
  }}
`
