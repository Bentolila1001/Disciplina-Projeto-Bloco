import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../presentantion/store'
import theme from '../presentantion/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </  ThemeProvider>
}

export default MyApp
