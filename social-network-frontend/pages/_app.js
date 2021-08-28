import GlobalStyles from '../src/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
