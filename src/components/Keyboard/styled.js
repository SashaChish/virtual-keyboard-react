import styled from 'styled-components'

export const GridContainer = styled.div`
  background: #000000;
  display: grid;
  height: 45vh;
  width: 80%;
  border: 1px solid;
  grid-template-areas:
    'functional functional indicator'
    'alphanumeric navigation numeric'
    'control navigation numeric';
  grid-template-columns: 1fr 12% 16%;
  grid-template-rows: 21% 1fr 16%;
  column-gap: 3%;
`
