import Card from '../Card/Card'
import './Services.css'
import { FaArrowRight } from "react-icons/fa6"
import Card11 from './../../assets/imags/serviceIcon1_1.svg'
import Card2 from './../../assets/imags/serviceIcon1_2.svg'
import Card3 from './../../assets/imags/serviceIcon1_3.svg'
import Card4 from './../../assets/imags/serviceIcon1_4.svg'
import { FaArrowLeft } from "react-icons/fa";
import CardServices from '../CardServices/CardServices'
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import Title from '../Title/Title'

export default function Services() {
    return (
        <div className='Services '>
            <div className='Container'>

                <Title
                    title3={"OUR SERVICES"}
                    X={true}
                />

                <h2 className='H'>Elevating Business With IT Ingenuity</h2>
                <div className='FirstIcon'>
                    <FaArrowLeft />
                    <FaArrowRight />

                </div>
                <div className='AllCard'>
                    <Card
                        title={'Woo Commerce '}
                        Card1={Card11}
                        des1={"Lorem ipsum dolor sit ametconsectetur adipisicing elit.Quas,delenitiexercitationem"}
                    />
                    <Card
                        title={'CRM Solution '}
                        Card1={Card2}
                        des1={"Lorem ipsum dolor sit ametconsectetur adipisicing elit.Quas,delenitiexercitationem"}
                    />
                    <Card
                        title={'Web Disgn '}
                        Card1={Card3}
                        des1={"Lorem ipsum dolor sit ametconsectetur adipisicing elit.Quas,delenitiexercitationem"}
                    />
                    <Card
                        title={'Data Guard Sentinel '}
                        Card1={Card4}
                        des1={"Lorem ipsum dolor sit ametconsectetur adipisicing elit.Quas,delenitiexercitationem"}
                    />
                </div>
            </div>
            <div className='Services-2'>
                <iframe className='Vedio1 Container'
                    width="75%" height="315" src="https://www.youtube.com/embed/NZGHXy1IAHM?si=Jsb3Yvocx3g0nzNN"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                     gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <div className='Services-2-card'>
                    <div className='Container Services-2-card1 '>
                        <CardServices
                            NumberIcon={<RiNumber1 />}
                            title1={'Requirement'}
                            des2={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum repellendus delectus repellat! Aut, porro?"}
                        />
                        <CardServices
                            NumberIcon={<RiNumber2 />}
                            title1={'UI/UX Design'}
                            des2={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum repellendus delectus repellat! Aut, porro?"}
                        />
                        <CardServices
                            NumberIcon={<RiNumber3 />}
                            title1={'Prototype'}
                            des2={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum repellendus delectus repellat! Aut, porro?"}
                        />
                        <CardServices
                            NumberIcon={<RiNumber4 />}
                            title1={'Development'}
                            des2={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum repellendus delectus repellat! Aut, porro?"}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}