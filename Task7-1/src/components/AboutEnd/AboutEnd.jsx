import './AboutEnd.css'
import PhotoE from './../../assets/imags/8.jpg'

export default function AboutEnd() {
    return (
        <div className='AboutEnd Container'>
            <div className='AboutEnd1'>
                <div className='line'></div>
                <span>1k + Brands Trust Us</span>
                <div className='line'></div>
            </div>
            <div className='AboutEnd2'>
                <img src={PhotoE} />
                <img src={PhotoE} />
                <img src={PhotoE} />
                <img src={PhotoE} />
                <img src={PhotoE} />
            </div>
        </div>
    )
}
