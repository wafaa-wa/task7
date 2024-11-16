import FeaturedCard from '../FeaturedCard/FeaturedCard';
import Title from '../Title/Title'
import './Featured.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import FaetPhoto1 from './../../assets/imags/blogThumb1_1.webp'
import FaetPhoto2 from './../../assets/imags/blogThumb1_2.webp'
import FaetPhoto3 from './../../assets/imags/blogThumb1_3.webp'
import FeatProfile1 from './../../assets/imags/blogProfile1_1.webp'
import FeatProfile2 from './../../assets/imags/blogProfile1_2.webp'
import FeatProfile3 from './../../assets/imags/blogProfile1_3.webp'

export default function Featured() {
    return (
        <div className='Featured'>
            <div className='Container'>
                <Title
                    title3={"BLOG &NEWS"}
                    X={true}
                />

                <h2 className='H'>Featurd News And Insights</h2>
                <div className='FirstIcon'>
                    <FaArrowLeft />
                    <FaArrowRight />

                </div>
                <div className='AllFeaturedCard'>
                    <FeaturedCard
                        FaetPhoto={FaetPhoto1}
                        FeatBtn={'Uncategorized'}
                        FeatDate={'MARCH14,2024'}
                        FeatTitle={"Best And Fastest Data Server Ever"}
                        FeatProfile={FeatProfile1}
                        FeatName={'Admin'}
                        FeatDes={'CO,Founder'}

                    />
                    <FeaturedCard
                        FaetPhoto={FaetPhoto2}
                        FeatBtn={'Uncategorized'}
                        FeatDate={'MARCH14,2024'}
                        FeatTitle={"Life Wonnot One Best Air Over Above ALL"}
                        FeatProfile={FeatProfile2}
                        FeatName={'Admin'}
                        FeatDes={'CO,Founder'}

                    />
                    <FeaturedCard
                        FaetPhoto={FaetPhoto3}
                        FeatBtn={'Uncategorized'}
                        FeatDate={'MARCH14,2024'}
                        FeatTitle={"Attentive Was Born In 2015 Help Sales Teams "}
                        FeatProfile={FeatProfile3}
                        FeatName={'Admin'}
                        FeatDes={'CO,Founder'}

                    />
                </div>

            </div>

        </div>
    )
}
