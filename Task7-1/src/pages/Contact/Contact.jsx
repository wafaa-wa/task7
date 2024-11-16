import FirstContact from '../../components/FirstContact/FirstContact'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Location from '../../components/Location/Location'
import NavBar from '../../components/NavBar/NavBar'
import Hero11Img2 from './../../assets/imags/breadcrumb.webp'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <NavBar A={true} />
      <Hero
        W={true}
        Hero11Img={Hero11Img2}
        Hero11Title={'Contact Us'}
        Hero11Des={'Home > Contact Us '}
      />
      <FirstContact />
      <Location />
      <Footer F={true} S={true} />
    </>
  )
}
