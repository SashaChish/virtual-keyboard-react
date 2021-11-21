import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-area: alphanumeric;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 5px;
`

export const KeyWrap = styled.div`
  cursor: pointer;
  padding: 0 2px;
  border-radius: 7px;
  background: ${({ theme }) => theme.bgColor};
  ${props =>
    props.gridPos &&
    `
			grid-row-start: ${props.gridPos.rowStart || 'auto'};
			grid-row-end: ${props.gridPos.rowEnd || 'auto'};
			grid-column-start: ${props.gridPos.colStart || 'auto'};
			grid-column-end: ${props.gridPos.colEnd || 'auto'};
		`}

  ${props =>
    props.select &&
    `
		transform: scale(0.8);
		border: 4px dashed green;
	`}
`
