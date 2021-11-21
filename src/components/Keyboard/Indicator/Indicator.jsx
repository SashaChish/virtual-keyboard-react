import React from 'react'

import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-area: indicator;
  background: transparent;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 5px;
  padding-right: 20px;
`

const Logo = styled.div`
  width: 100%;
  text-align: right;
  text-transform: uppercase;
  color: ${({ theme }) => theme.logoColor};
  font-weight: 600;
  font-size: 3.5vw;
  grid-column-start: 3;
`

const Indicator = () => {
  return (
    <GridContainer>
      <Logo>g</Logo>
    </GridContainer>
  )
}

export default Indicator
