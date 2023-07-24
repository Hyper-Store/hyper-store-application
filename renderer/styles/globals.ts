import { createGlobalStyle } from 'styled-components'
import css from 'styled-jsx/css'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    font-size: 16px;
    color: ${props => props.theme.texts.title};
    overflow: hidden;
    background-color: ${props => props.theme.backgrounds.bgPrimary} !important;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #__next {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    font-family: 'Russo One';
    color: ${props => props.theme.colors.primary};
    font-size: 0.750rem;
    opacity: 0.7; 
    transition: 0.3s ease;
    text-decoration: none;

    &:hover {
      opacity: 1; 
    }
  }

  code {
    color: ${props => props.theme.colors.primary};
    font-weight: 300;
  }


  ::-webkit-scrollbar{
    width: 5px
  }

  ::-webkit-scrollbar-track{
    background: ${props => props.theme.backgrounds.bgSecondary};
  }

  ::-webkit-scrollbar-thumb{
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.border_raidus};
  }
`