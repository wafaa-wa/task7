
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import './About.css'
import Hero11Img1 from './../../assets/imags/breadcrumb.webp'
import AboutSecond from '../../components/AboutSecond/AboutSecond'
import TeamMembers from '../../components/TeamMembers/TeamMembers'
import AboutEnd from '../../components/AboutEnd/AboutEnd'
import Footer from '../../components/Footer/Footer'

export default function About() {
  return (
    <>
      <NavBar A={true} />
      <Hero
        W={true}
        Hero11Img={Hero11Img1}
        Hero11Title={'About Us'}
        Hero11Des={'Home > About Us'}
      />
      <AboutSecond />
      <TeamMembers />
      <AboutEnd />
      <Footer F={true} />


    </>
  )
}
