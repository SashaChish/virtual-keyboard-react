import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-area: control;
  grid-template-columns: repeat(3, 1fr) 5fr repeat(4, 1fr);
  gap: 5px;
  margin-top: 5px;
`
export const KeyWrap = styled.div`
  cursor: pointer;
  background: ${({ theme }) => theme.bgColor};
  padding: 0 2px;
  border-radius: 7px;
`
