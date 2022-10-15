import "../styles/globals.css";
import styled, { createGlobalStyle } from "styled-components";
import { Footer } from "../pages/src/components/common/footer/footer.component";
import { Navbar } from "../pages/src/components/common/navbar/navbar.component";
import { Container } from "./src/components/common/container/container.component";

const GlobalStyles = createGlobalStyle`


*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}


  html {
    --color-text: hsl(0deg, 0%, 100%);
    --color-background: hsl(210deg, 30%, 8%);
    --color-blurred-background: hsla(210deg, 30%, 8%, 0.85);
    --color-primary: hsl(230deg, 100%, 69%);
    --color-secondary: hsl(333deg, 100%, 52%);
    --color-tertiary: hsl(53deg, 100%, 50%);
    --color-decorative: hsl(200deg, 50%, 60%);
    --color-muted: hsl(210deg, 38%, 15%);
    --color-muted-background: hsla(210deg, 38%, 15%, 0.85);
    --color-info: hsl(230deg, 100%, 69%);
    --color-success: hsl(160deg, 100%, 40%);
    --color-success-background: hsla(160deg, 100%, 40%, 0.1);
    --color-error: hsl(340deg, 95%, 60%);
    --color-error-background: hsla(340deg, 95%, 43%, 0.1);
    --color-alert: hsl(30deg, 100%, 50%);
    --color-alert-background: hsla(38deg, 100%, 50%, 0.1);
    --color-venn-0: hsl(250deg, 100%, 50%);
    --color-venn-1: hsl(175deg, 100%, 50%);
    --color-gray-100: hsl(210deg, 15%, 20%);
    --color-gray-200: hsl(210deg, 15%, 25%);
    --color-gray-300: hsl(210deg, 10%, 40%);
    --color-gray-400: hsl(210deg, 9%, 45%);
    --color-gray-500: hsl(210deg, 8%, 50%);
    --color-gray-600: hsl(210deg, 12%, 55%);
    --color-gray-700: hsl(210deg, 14%, 66%);
    --color-gray-900: hsl(210deg, 25%, 88%);
    --color-gray-1000: hsl(210deg, 25%, 96%);
    --color-subtle-background: hsl(210deg, 30%, 8%);
    --color-subtle-floating: hsl(210deg, 22%, 15%);
    --color-homepage-light: hsla(200deg, 100%, 85%, 0);
    --color-homepage-dark: hsla(200deg, 100%, 85%, 0.1);
    --color-homepage-bg: hsl(210deg, 30%, 8%);
    --syntax-bg: hsl(210deg, 30%, 12%);
    --syntax-highlight: hsl(210deg, 30%, 18%);
    --syntax-txt: #FFF;
    --syntax-comment: #6c8998;
    --syntax-prop: #FF39A8;
    --syntax-bool: #FFD600;
    --syntax-val: #718e9c;
    --syntax-str: rgb(155, 109, 255);
    --syntax-name: #C653FF;
    --syntax-del: #FF5555;
    --syntax-regex: #ffd700;
    --syntax-fn: rgb(0, 190, 255);
    --prefers-dark: true;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    margin: 0px;
    line-height: calc(1em + 0.725rem);
    -webkit-font-smoothing: antialiased;
  }


  
  body {
   color: var(--color-text);
    background: var(--color-background);
    transition: color 350ms ease 0s, background 350ms ease 0s;
  }


  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}


  h2 {
    font-size: 1.6rem;
    line-height:28px;
    color: var(--color-secondary);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p{
    color: var(--color-text);
    color:#9ba9b4;
    font-size:1.8rem;
    line-height:28px;
  }

  ul{
    list-style:none;
  }

  li{
    font-size:1.6rem;
  }

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
