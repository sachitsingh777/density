import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main >
      <Navbar/>
      <LandingPage/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Footer />
    </main>
  )
}
