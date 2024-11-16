import './Hero.css'
import photo from './../../assets/imags/profileShape1_1.webp'
import photo2 from './../../assets/imags/heroThumb1_1.webp'
import { FaArrowRight } from "react-icons/fa6"
import { IoIosStar } from "react-icons/io"
import { GiCheckMark } from "react-icons/gi"
import { PiPulseBold } from "react-icons/pi";
import PhotoLeft from './../../assets/imags/heroShape1_2.webp'
import PhotoRight from './../../assets/imags/heroShape1_1.webp'
import PhotoBottom from './../../assets/imags/heroShape1_3.webp'
import Hero11Right from './../../assets/imags/line-element.webp'
import Hero11Left from './../../assets/imags/element.webp'

export default function Hero({ W, Hero11Img, Hero11Title, Hero11Des }) {
    return (
        <div className={W ? 'Hero11' : 'Hero'}>
            {!W && <div className='Container Hero-content'>
                <div className='Hero-First-Side'>
                    <div className='Top-Side'>
                        <div className='Top-Side1' >
                            <PiPulseBold />
                            <span>Every Thing You Need To Create A Website</span>
                        </div>
                        <h1> Business Innovation Whith IT Services Expertise</h1>
                        <div className='Top-Side2'>
                            <div className='Top-Side2-1'>
                                <div>
                                    <GiCheckMark />
                                    Deployment and Support
                                </div>
                                <div>
                                    <GiCheckMark />
                                    Discovery and Analysis
                                </div>
                            </div>
                            <div className='Top-Side2-1'>
                                <div>
                                    <GiCheckMark />
                                    Flexibility and Adaptability
                                </div>
                                <div>
                                    <GiCheckMark />
                                    Competitive Advantage
                                </div>
                            </div>
                        </div>
                        <button>Get Started <FaArrowRight /></button>
                    </div>
                    <div className='Bottom-Side'>
                        <div className='left-side '>
                            <div className='left-side1 '>
                                <IoIosStar />
                                Trustipilot
                            </div>
                            <div className='left-side2'>
                                <img src={photo} />
                                <div>
                                    <div>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>
                                    <p>450+reviews</p>
                                </div>
                            </div>
                            <div className='line'>

                            </div>
                        </div>
                        <div className='righ-side'>
                            <div className='left-side1'>
                                Google
                            </div>
                            <div className='left-side2'>
                                <img src={photo} />
                                <div>
                                    <div>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>
                                    <p>450+reviews</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='Hero-Second-Side'>
                    <div className='Hero-imag'>
                        <img src={photo2} />
                    </div>

                </div>
            </div>}
            {!W && <div className='PhotoLeft'>
                <img src={PhotoLeft} />
            </div>}
            {!W && <div className='PhotoRight'>
                <img src={PhotoRight} />
            </div>}
            {!W && <div className='PhotoBottom'>
                <img src={PhotoBottom} />
            </div>}
            {W && <div className='Hero11Cont'>
                <div className='color'></div>
                <img className='Hero11Img' src={Hero11Img} />
                <div className='Hero11Cont1'>
                    <h1>{Hero11Title}</h1>
                    <p>{Hero11Des}</p>
                </div>
                <img className='Hero11Right' src={Hero11Right} />
                <img className='Hero11Left' src={Hero11Left} />
            </div>}

        </div>
    )
}