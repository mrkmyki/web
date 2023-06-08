// pages/_app.js
import "bootstrap/dist/css/bootstrap.css"
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Breadcrumbs from '../components/breadcrumbs'

function MyApp({ Component, pageProps }) {
    return (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      )
}

export default MyApp
