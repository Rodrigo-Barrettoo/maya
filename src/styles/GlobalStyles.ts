import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }
  
  html, border-style, #root {
    height: 100%;
    scroll-behavior: smooth;

  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    background: var(--primary);
  }

  :root {
    --primary: #f2f2f2;
    --secondary: #333333;
    --tertiary: #33333325;

    --white: #ffffff;
    --maya: #a60808;
  }
`;
