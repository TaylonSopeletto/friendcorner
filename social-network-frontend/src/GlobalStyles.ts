import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        
        height: 100%;
      }
      *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
      }
      :root{
          --light-primary: #FFFFFF;
          --light-secundary: #F3F3F3;
          --light-tertiary: #eeee;
          --light-text: #000000;
          --light-input: #eeee;
          --light-border: #bbb;
          --primary: #383838;
          --secundary: #303030;
          --text: #FFFFFF;
          --tertiary: #454545;
          --blue: #063DFF;
          --border: #595959;
          --font: #363636;
          --input: #414141;
      }
`
