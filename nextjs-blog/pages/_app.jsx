import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://hy1d38la.api.sanity.io/v1/graphql/production/default',
    // fetchOptions: {
    //   mode: 'no-cors',
    // },
    // credentials: 'include',
    headers: {
      'Access-Control-Allow-Methods': 'POST',
    },
  }),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };
