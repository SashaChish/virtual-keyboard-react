import styled from 'styled-components'

export const Key = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`