import './Title.css'
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

export default function Title( {title3 , X}) {
  return (
    <div className={X ? 'Title' : 'Title1'}>
        <VscArrowLeft />
        <span>{title3}</span>
        <VscArrowRight />
    </div>
  )
}
