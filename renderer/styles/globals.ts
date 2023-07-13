import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Gotham';
  }

  body {
    font-size: 16px;
    color: ${props => props.theme.texts.title};
    overflow: hidden;
    background-color: ${props => props.theme.backgrounds.bgPrimary} !important;
  }

  @font-face {
    font-family: 'Winter Solstice';
    font-style: normal;
    font-weight: normal;
    src: local('Winter Solstice'), url('/fonts/wintersolstice.woff') format('woff');
  }

  @font-face {
    font-family: 'Zona Pro';
    font-style: normal;
    font-weight: normal;
    src: local('Zona Pro'), url('/fonts/ZonaPro-Bold.otf') format('otf');
  }

  @font-face {
    font-family: 'AXIS';
    font-style: normal;
    font-weight: normal;
    src: local('AXIS'), url('/fonts/Axis Extrabold.otf') format('otf');
  }

  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham'), url('/fonts/GothamBold.ttf') format('ttf');
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