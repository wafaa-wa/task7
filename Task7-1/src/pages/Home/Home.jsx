import Featured from '../../components/Featured/Featured'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import Pricing from '../../components/Pricing/Pricing'
import Second from '../../components/Second/Second'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'

import './Home.css'

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Second />
      <Services />
      <Pricing />
      <Testimonials />
      <Featured />
      <Footer />
    </>
  )
}
