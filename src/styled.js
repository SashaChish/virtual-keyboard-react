import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const Global = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
`

export const AppWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
	flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
