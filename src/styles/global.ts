import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.color.bcakground};
    font-size: 14px;
    color: ${props => props.theme.color.text};
    font-family: 'Roboto', sans-serif;
  }
`;