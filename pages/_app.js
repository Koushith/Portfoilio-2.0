import '../styles/globals.css';
import Page from './src/components/app-layout';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
