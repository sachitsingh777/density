import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

export default function Home() {
  return (
    <main >
      <Navbar/>
      <LandingPage/>
    </main>
  )
}
