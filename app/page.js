import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Page2 from './components/Page2'

export default function Home() {
  return (
    <main >
      <Navbar/>
      <LandingPage/>
      <Page2/>
    </main>
  )
}
