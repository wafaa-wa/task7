import './TestimonialCard.css'
import { IoIosStar } from "react-icons/io"
import { SiComma } from "react-icons/si";

export default function TestimonialCard({ DesTes, Profile1, Name, Business , W }) {
    return (
        <div className={W ?  'TestimonialCard' : 'TestimonialCard1'}>
            <div className='StarIcon'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
            <p>{DesTes}</p>
            <div className='Profile'>
                <div className='Profile1'>
                    <img src={Profile1} />
                    <div>
                        <h4>{Name}</h4>
                        <p>{Business}</p>
                    </div>
                </div>
                <div>
                    <SiComma />
                    <SiComma />
                </div>
            </div>

        </div>
    )
}
