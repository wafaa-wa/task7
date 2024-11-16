import TeamMembersCard from '../TeamMembersCard/TeamMembersCard';
import Title from '../Title/Title'
import './TeamMembers.css'
import { FaArrowRight } from "react-icons/fa6";
import PhotoT1 from './../../assets/imags/04.webp'
import PhotoT2 from './../../assets/imags/05.webp'
import PhotoT3 from './../../assets/imags/06.webp'
import PhotoT4 from './../../assets/imags/07.webp'

export default function TeamMembers() {
    return (
        <div className='TeamMembers Container'>
            <div className='TeamMembers1'>
                <div >
                    <Title X={true} title3={'TEAM MEMBERS'} />
                    <h2>Our Dedected Team M enbers</h2>
                </div>
                <button>All Members <FaArrowRight /> </button>
            </div>
            <div className='AllTeamMembersCard '>
                <TeamMembersCard
                    PhotoT={PhotoT1}
                    TitleTeam={'Masirol Islam'}
                    DesTeam={'Web Designer'}
                />
                <TeamMembersCard
                    PhotoT={PhotoT2}
                    TitleTeam={'Masirol Islam'}
                    DesTeam={'Web Designer'}
                />
                <TeamMembersCard
                    PhotoT={PhotoT3}
                    TitleTeam={'Masirol Islam'}
                    DesTeam={'Web Designer'}
                />
                <TeamMembersCard
                    PhotoT={PhotoT4}
                    TitleTeam={'Masirol Islam'}
                    DesTeam={'Web Designer'}
                />


            </div>
        </div>
    )
}
