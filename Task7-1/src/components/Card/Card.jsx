import './Card.css'
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Card({ title, Card1, des1 }) {
    return (
        <div className='Card'>
            <div className='ServiceImage'>
                <img src={Card1} />
            </div>
            <h3>{title}</h3>
            <p>{des1}</p>

            <button>Read more <FaAngleDoubleRight /> </button>

        </div>
    )
}
