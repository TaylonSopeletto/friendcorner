import GlobalStyles from '../src/GlobalStyles'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {

  const theme = {
    colors: {
      primary: "#fafafa",
    },
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
}

export default MyApp
