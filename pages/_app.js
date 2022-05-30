import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react/";

import GlobalStyles from '../styles/GlobalStyles'
//import 'tailwindcss/tailwind.css'
//import '@material-tailwind/react'

//import dynamic from 'next/dynamic'
// const T = dynamic(
//   () => import('@material-tailwind/react')
// )


const App = ({ Component, pageProps }) => (
  <>
      <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      </ThemeProvider>
      
    
  </>
)

    // <ThemeProvider>
    // </ThemeProvider>
export default App

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp