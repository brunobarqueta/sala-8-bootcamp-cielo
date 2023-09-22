import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  .app-container {
    width: 100%;
    max-width: 944px;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${(props) => { return props.theme.text}};
  }

  .app-container a {
    color: ${(props) => { return props.theme.text}};
  }

  .app-container input {
    color: ${(props) => { return props.theme.text}};
    border: 1px solid ${(props) => { return props.theme.border}};
  }
  
  .app-container input::placeholder {
    color: ${(props) => { return props.theme.text}};
  }

  html {
    background-color: ${(props) => { return props.theme.primary}};
  }
  
  #root {
    width: 100%;
    height: 100%;
  }

`;