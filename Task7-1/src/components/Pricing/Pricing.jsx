import './Pricing.css'
import Title from '../Title/Title'
import PhotoP from './../../assets/imags/pricingIcon1_2.svg'
import PricingCard from '../PricingCard/PricingCard'
import Shape1 from './../../assets/imags/pricingShape1_2.webp'
import Shape2 from './../../assets/imags/pricingShape1_1.webp'

export default function Pricing() {
    return (
        <div className='Pricing'>
            <img className='TopShape' src={Shape1} />
            <div className='Container'>
                <Title
                    title3={"OUR PRICING"}
                />
                <h2>OUR AWESOME PRICING PLANS</h2>
                <div className='Pricing1'>
                    <div className='Btn'>
                        <button>Monthly</button>
                        <button>Yearly</button>
                    </div>
                    <img src={PhotoP} />
                    <span>Save25%</span>
                </div>
                <div className='Pricing2'>
                    <PricingCard Y={true} />
                    <PricingCard />
                    <PricingCard Y={true} />
                </div>
            </div>
            <img className='BottomShape' src={Shape2} />
        </div>
    )
}
