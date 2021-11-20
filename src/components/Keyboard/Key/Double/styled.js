import styled from 'styled-components'

export const Key = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color};
`

export const Row = styled.div`
  min-width: 60%;
  display: flex;
  justify-content: ${({ position }) => position};
  font-size: ${({ fontSize }) => fontSize};
  text-transform: uppercase;
  font-weight: 600;
`
