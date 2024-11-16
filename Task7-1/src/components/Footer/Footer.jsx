import './Footer.css'
import ImgLeft from './../../assets/imags/ctaThumb.webp'
import FooterLeft1 from './../../assets/imags/ctaShape1_1.webp'
import FooterLeft2 from './../../assets/imags/ctaShape2_1.webp'
import FooterBetween from './../../assets/imags/ctaShape2_4 (1).webp'
import FooterRight from './../../assets/imags/ctaShape2_4.webp'
import { FaArrowRight } from "react-icons/fa6"
import Logo1 from './../../assets/imags/logo.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import im1 from './../../assets/imags/footerThumb1_1.webp';
import im2 from './../../assets/imags/footerThumb1_2.webp';
import { MdOutlineDateRange } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";


export default function Footer({ F , S}) {
    return (
        <div className={F ? 'FooterTow' : 'Footer'}>
            {!F && <div className='Footer1 Container'>
                <div className='Foter1-1 '>
                    <img className='FooterLeft1' src={FooterLeft1} />
                    <img className='FooterLeft2' src={FooterLeft2} />
                    <img className='FooterBetween' src={FooterBetween} />
                    <img className='FooterRight' src={FooterRight} />
                </div>
                <div className='Foter1-2'>
                    <div className='ImgLeft'><img src={ImgLeft} /></div>
                    <h3>Stay Connecting With Cutting Edge IT</h3>
                    <button className='BtnTest'>TALK TO A SPECIALIST <FaArrowRight /></button>
                </div>
            </div>}
            {F && <div className='FooterTow1 Container'>
                <div className='FooterTow1-1'>
                    <IoLocationOutline />
                    <div className='FooterTow1-2'>
                        <span>Address</span>
                        <p>4648 Rocky Road Philadelfia PA</p>
                    </div>
                </div>
                <div className='FooterTow1-1'>
                    <MdEmail />
                    <div className='FooterTow1-2'>
                        <span>Send Email</span>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div className='FooterTow1-1'>
                    <FaPhone />
                    <div className='FooterTow1-2'>
                        <span>Call Emergency</span>
                        <p>+88 0123 456 99</p>
                    </div>
                </div>
            </div>}
            <div className='Footer2'>
                <div className='Footer2-1 Container'>
                    <div className='FirstFoo'>
                        <img className='Logo1' src={Logo1} />
                        <p>Lorem ipsum dolor, sit  </p>
                        <p>amet consectetur adipisicing elit. </p>
                        <p>Ut aspernatur, hic est</p>
                        <p>ea qui ducimus sint autem!</p>

                        <div className='FootIcon'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaYoutube />
                            <FaInstagramSquare />
                        </div>
                    </div>
                    <div className='SecondFoo'>
                        <h4>quick links</h4>
                        <div>
                            <FaAngleDoubleRight />
                            <span>Exteach Abut</span>
                        </div>
                        <div>
                            <FaAngleDoubleRight />
                            <span>Our Services</span>
                        </div>
                        <div>
                            <FaAngleDoubleRight />
                            <span>Our Blogs</span>
                        </div>
                        <div>
                            <FaAngleDoubleRight />
                            <span>FAQS </span>
                        </div>
                        <div>
                            <FaAngleDoubleRight />
                            <span>Contact Us </span>
                        </div>

                    </div>
                    <div className='ThirdFoo'>
                        <h4>Resent Posts</h4>
                        <div className='ThirdFoo-1'>
                            <div className='ThirdFoo-11'>
                                <img src={im1} />
                                <div className='ThirdFooRight'>
                                    <div>
                                        <MdOutlineDateRange />
                                        <span>15thApril,2024</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit.</p>
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>

                            </div>
                            <div className='ThirdFoo-11'>
                                <img src={im2} />
                                <div className='ThirdFooRight'>
                                    <div>
                                        <MdOutlineDateRange />
                                        <span>15thApril,2024</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit.</p>
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={S ? 'FourtFoo1' : 'FourtFoo'}>
                        <h4>Contact Us</h4>
                        <div>
                            <MdEmail />
                            <span>info@example.com</span>
                        </div>
                        <div>
                            <FaPhone />
                            <span>+208-6666-0112</span>
                        </div>
                        <form >
                            <input type="email" placeholder=" Your email address " />
                        </form>
                        <div className='checkbox'>
                            <input type="checkbox" />
                            <span>I agree to <a href="#">privicy policy.</a> </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='Footer3 '>
                <div className=' Footer3-1 Container'>
                    <div className='Footer3-1-2'>
                        <p><span>C</span>All Copyright by Extech</p>
                    </div>
                    <div>
                        <div className='Footer3-11'>
                            <span>Teams And Condition </span>
                            <span>Privicy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
