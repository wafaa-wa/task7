import { RiNumber0 } from "react-icons/ri";

export default function CardServices({ NumberIcon, title1, des2 }) {
    return (
        <div className='CardServices'>
            <div>
                <RiNumber0 />
                {NumberIcon}
            </div>
            <h3>{title1}</h3>
            <p>{des2}</p>
        </div>
    )
}