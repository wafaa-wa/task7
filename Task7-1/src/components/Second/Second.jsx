import './Second.css'
import imag1 from './../../assets/imags/brandLogo1_1.svg'
import imag2 from './../../assets/imags/brandLogo1_2.svg'
import imag3 from './../../assets/imags/brandLogo1_3.svg'
import imag4 from './../../assets/imags/brandLogo1_4.svg'
import imag5 from './../../assets/imags/brandLogo1_5.svg'

export default function Second() {
  return (
    <div className='Second Container'>
      <img src={imag1} />
      <img src={imag2} />
      <img src={imag3} />
      <img src={imag4} />
      <img src={imag5} />
    </div>
  )
}