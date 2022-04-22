import '../styles/globals.css';
import styled, { createGlobalStyle } from 'styled-components';
import { Footer } from '../pages/src/components/common/footer/footer.component';
import { Navbar } from '../pages/src/components/common/navbar/navbar.component';
import { Container } from './src/components/common/container/container.component';

const GlobalStyles = createGlobalStyle`
/* check later */
  @font-face {
    font-family: 'Wotfard';
    src: url('/static/fonts/Wotfard/Wotfard-Bold.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }

*{
  margin:0;
  padding:0;
  box-sizing: inherit;
}

  html {
    --darkBlue: #4B4ACF;
    --offWhite: rgb(235, 241, 245);
    --white:#fff;
    --greyLight: #9ba9b4;
    --backgroundDark:#151719;
    --green:rgb(20, 184, 166);
    --pink: rgb(236, 72, 153);
    --lightBlue: #5D5DFF;
    --fontBody: 1.8rem;
    --fontHeadingBolder:5.2rem;
    --fontBodyTiny:1.6rem;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {

  font-family: 'Inter',sans-serif;
   background: var(--backgroundDark);
   font-size: var( --fontBody);
   color:var(--greyLight);
    line-height: 2;
  }
  h2 {
    color: #d9e3ea;
  }
  p{
    color:##9ba9b4;
  }
  ul{
    list-style:none;
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
