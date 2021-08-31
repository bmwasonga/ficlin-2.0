import 'nprogress/nprogress.css';
import '../components/DatePickerStyling/date-picker.css';

import { ChakraProvider } from '@chakra-ui/react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostAuthProvider } from '@nhost/react-auth';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

import theme from '@/theme/theme';
import { GRAPHQL_ENDPOINT } from '@/utils/config';
import { auth } from '@/utils/nhost';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider auth={auth} gqlEndpoint={GRAPHQL_ENDPOINT}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </NhostApolloProvider>
    </NhostAuthProvider>
  );
};

export default MyApp;
