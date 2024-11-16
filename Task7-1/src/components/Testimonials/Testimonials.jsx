import './Testimonials.css'
import Phot from './../../assets/imags/ctaThumb1_1.webp'
import { FaArrowRight } from "react-icons/fa6";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import Title from '../Title/Title';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import Profile11 from './../../assets/imags/testiThumb3_1.webp'
import Profile12 from './../../assets/imags/testiThumb3_2.webp'
import Profile13 from './../../assets/imags/testiThumb3_3.webp'
import LeftShape from './../../assets/imags/pricingShape1_2.webp'
import RightShape from './../../assets/imags/pricingShape1_2.webp'
import TesTopShap from './../../assets/imags/ctaShape1_1.webp'

export default function Testimonials() {
    return (
        <div className='Testimonials'>

            <div className='Testimonials-top Container'>
                <div className='Testimonials-top1'>
                    <img src={Phot} />
                    <div className='Half'>
                        <div className='WhiteTitle'>
                            <VscArrowLeft />
                            <span>CONTACT US</span>
                            <VscArrowRight />
                        </div>
                        <h2>24/7 Expert Hosting Support Our Customers Love</h2>
                    </div>
                    <button className='BtnTest'>TALK TO A SPECIALIST <FaArrowRight /></button>
                </div>
                <div className='Testimonials-top2'>
                    <img className='TesTopShap' src={TesTopShap} />

                </div>
            </div>
            <div className='Testimonials-bottom'>
                <img className='LeftShape' src={LeftShape} />
                <div className='Container'>
                    <Title
                        title3={'Testimonials'}
                        X={false}
                    />
                    <h2>Our Latest Client Feedback</h2>
                    <div className='AllCardTestimonials'>
                        <TestimonialCard
                            DesTes={"Lorem ipsum dolor sit ametconsectetur adipisicing elit.Quas,delenitiexercitationem"}
                            Profile1={Profile11}
                            Name={'Kristin Waston'}
                            Business={'Web Design'}
                            W={true}

                        />
                        <TestimonialCard
                            DesTes={"Lorem ipsum dolor sit ametconsectetur adipisicing elit.Quas,delenitiexercitationem"}
                            Profile1={Profile12}
                            Name={'Kristin Waston'}
                            Business={'Web Design'}
                            W={false}

                        />
                        <TestimonialCard
                            DesTes={"Lorem ipsum dolor sit ametconsectetur adipisicing elit.Quas,delenitiexercitationem"}
                            Profile1={Profile13}
                            Name={'Kristin Waston'}
                            Business={'Web Design'}
                            W={true}

                        />
                    </div>
                </div>
                <img className='RightShape' src={RightShape} />
            </div>
            <img className='RightShape' src={RightShape} />
        </div>
    )
}
