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
  ${props =>
    props.gridPos &&
    `
			grid-column-start: ${props.gridPos.colStart || 'auto'};
		`}

  ${props =>
    props.select &&
    `
		transform: scale(0.8);
		border: 4px dashed green;
	`}
`
