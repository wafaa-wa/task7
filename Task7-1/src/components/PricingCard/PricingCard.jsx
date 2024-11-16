import './PricingCard.css'
import PhotoIcon from './../../assets/imags/pricingIcon1_1.svg'
import { IoIosCheckmark } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { VscErrorSmall } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa6";

export default function PricingCard( {Y}) {
    return (
        <div className={Y ? 'PricingCard' : 'PricingCard1'}>
            <div className='TopCard'>
                <div>
                    <h3>Regular Plans</h3>
                    <h3>$49 <span>/Month</span></h3>
                </div>
                <img src={PhotoIcon} />
            </div>
            <div className='Describtion'>
                <div className='Describtion1'>
                    <div className='left'>
                        <IoIosCheckmark />
                        <span>100 GB ssd Strong</span>
                    </div>
                    <GoQuestion />
                </div>
                <div className='Describtion1'>
                    <div className='left'>
                        <IoIosCheckmark />
                        <span>Weekly Backup</span>
                    </div>
                    <GoQuestion />
                </div>
                <div className='Describtion1'>
                    <div className='left'>
                        <IoIosCheckmark />
                        <span>Un Limited Free SSL</span>
                    </div>
                    <GoQuestion />
                </div>
                <div className='Describtion1'>
                    <div className='left'>
                        <IoIosCheckmark />
                        <span>24/7 System Monitoring</span>
                    </div>
                    <GoQuestion />
                </div>
                <div className='Describtion1'>
                    <div className='left'>
                        <IoIosCheckmark />
                        <span>Free Domain($9.99Value)</span>
                    </div>
                    <GoQuestion />
                </div>
                <div className='Describtion1'>
                    <div className='wrong'>
                        <VscErrorSmall />
                        <span>Frame1643236</span>
                    </div>
                    <GoQuestion />
                </div>
                <div className='Describtion1'>
                    <div className='wrong'>
                        <VscErrorSmall />
                        <span>20+Payment Method</span>
                    </div>
                    <GoQuestion />
                </div>
            </div>
            <button>GET STARTED NOW <FaArrowRight /></button>
        </div>
    )
}
