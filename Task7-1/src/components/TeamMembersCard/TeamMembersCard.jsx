import './TeamMembersCard.css'
import { IoShareSocialOutline } from "react-icons/io5";

export default function TeamMembersCard({ PhotoT, TitleTeam, DesTeam }) {
    return (
        <div className='TeamMembersCard '>
            <img src={PhotoT} />
            <div className='TeamBottom'>
                <IoShareSocialOutline />
                <h3>{TitleTeam}</h3>
                <p>{DesTeam}</p>
            </div>

        </div>
    )
}
