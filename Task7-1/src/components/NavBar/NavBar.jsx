import './NavBar.css'
import Logo from './../../assets/imags/logo.svg'
import { Link } from 'react-router-dom'
import { SlArrowDown } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import logo3 from './../../assets/imags/plane.webp'


export default function NavBar({ A }) {
    return (
        <section className={A ? 'Nav2' : 'test'}>
            <nav className='Wo-Nav'>
                {A && <img className='logo3' src={logo3} />}
                <img src={Logo} />
                <div className='nav-first-side'>
                    <ul className='Menu'>
                        <li>
                            <Link to={'/'}>
                                Home
                                <SlArrowDown />

                            </Link>
                        </li>
                        <li>
                            <Link to={'/About'}>
                                About

                            </Link>
                        </li>
                        <li>
                            <Link to={'/Services'}>
                                Services
                                <SlArrowDown />

                            </Link>
                        </li>
                        <li>
                            <Link to={'/Pages'}>
                                Pages
                                <SlArrowDown />

                            </Link>
                        </li>
                        <li>
                            <Link to={'/Blog'}>
                                Blog
                                <SlArrowDown />

                            </Link>
                        </li>
                        <li>
                            <Link to={'/Contact'}>
                                Contact

                            </Link>
                        </li>
                        <li>
                            {A && <SlMagnifier />}
                        </li>
                    </ul>
                </div>
                {!A && <div className='Nav-second-side'>
                    <div className='Nav-icon'>
                        <SlMagnifier />
                        <SlBasket />
                    </div>
                    <div className='Nav-Btn'>
                        <button>GET A QUOTE <FaArrowRight /> </button>
                    </div>
                </div>}

                {A && <div className='Nav-Btn'><button>GET A QUOTE <FaArrowRight /> </button></div>}
            </nav>

        </section>

    )
}