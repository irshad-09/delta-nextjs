import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '../app/store';
import GlobalStyle from '../styles/globalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
