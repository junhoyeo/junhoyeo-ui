import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700,900&display=swap&subset=korean');
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700,800&display=swap');

  ${normalize}

  body {
    margin: 0;
  }

  button:focus,
  input:focus {
    outline: none;
  }

  button {
    border: none;
  }

  img {
    -webkit-user-drag: none;
  }
`;

/**
 * @component
 * */
export default GlobalStyle;
