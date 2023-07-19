import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    font-size: 16px;
    color: ${props => props.theme.texts.title};
    overflow: hidden;
    background-color: ${props => props.theme.backgrounds.bgPrimary} !important;
    border: 1px solid ${props => props.theme.borders.primary.color};
    border-radius: ${props => props.theme.border_raidus};
    width: 100vw;
    height: 100vh;
  }

  @font-face {
    font-family: 'Winter Solstice';
    font-style: normal;
    font-weight: normal;
    src: local('Winter Solstice'), url('/fonts/wintersolstice.ttf') format('ttf');
  }

  @font-face {
    font-family: 'AXIS';
    font-style: normal;
    font-weight: normal;
    src: local('AXIS'), url('/fonts/axis-extrabold.otf') format('otf');
  }

  a {
    font-family: 'AXIS';
    color: ${props => props.theme.colors.primary};
    font-size: 0.750rem;
    opacity: 0.7; 
    transition: 0.3s ease;
    text-decoration: none;

    &:hover {
      opacity: 1; 
    }
  }
`