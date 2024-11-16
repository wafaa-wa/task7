import './FeaturedCard.css'
import { FaArrowRight } from "react-icons/fa";

export default function FeaturedCard({ FaetPhoto, FeatBtn, FeatDate, FeatTitle, FeatProfile, FeatName, FeatDes }) {
    return (
        <div className='FeaturedCard'>
            <img className='FaetPhoto' src={FaetPhoto} />
            <div className='FeatCardBottom'>
                <div className='FeatTop'>
                    <button>{FeatBtn}</button>
                    <span>{FeatDate}</span>
                </div>
                <h3>{FeatTitle}</h3>
                <div className='FeatBottm'>
                    <div className='FeatBottmLeft'>
                        <img src={FeatProfile} />
                        <div>
                            <h4>{FeatName}</h4>
                            <p>{FeatDes}</p>
                        </div>
                    </div>
                    <FaArrowRight />

                </div>

            </div>
        </div>
    )
}
