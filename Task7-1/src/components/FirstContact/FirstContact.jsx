import './FirstContact.css'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import ContactLeft2 from './../../assets/imags/video.webp'

export default function FirstContact() {
    return (
        <div className='FirstContact Container'>
            <div className='Content'>
                <div className='ContactLeft'>
                    <div className='ContactLeft1'>
                        <div className='ContactLeft1-1'>
                            <div className='FooterTow1-1 line2'>
                                <FaPhone />
                                <div className='FooterTow1-2 '>
                                    <span>Call Us 7/24</span>
                                    <p>+208-555-0112</p>
                                </div>
                            </div>
                            <div className='FooterTow1-1 line2'>
                                <MdEmail />
                                <div className='FooterTow1-2'>
                                    <span>Makw A Quote</span>
                                    <p>infoteach@gmail.com</p>
                                </div>
                            </div>
                            <div className='FooterTow1-1 line2'>
                                <IoLocationOutline />
                                <div className='FooterTow1-2'>
                                    <span>Location</span>
                                    <p>4517 Washington ave</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='ContactLeft2' src={ContactLeft2} />
                </div>
                <div className='ContactRight'>
                    <h2>Ready To Get Stsrted ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Eum voluptates libero aut architecto saepe voluptatum?</p>
                    <div className='Form'>
                        <form className='Form' >
                            <div className='Form1'>
                                <label >Your Name </label>
                                <input type="text" />
                            </div>
                            <div className='Form1'>
                                <label >Your Email </label>
                                <input type="email" />
                            </div>
                        </form>
                    </div>
                    <div className='Form1'>
                        <label >Write Message</label>
                        <textarea ></textarea>
                    </div>
                    <button>SEND MESSAGE<FaArrowRight /> </button>

                </div>

            </div>
        </div>
    )
}
