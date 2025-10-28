import './small.css';
import { RiArrowRightDoubleFill } from "react-icons/ri";

export function Small() {
    return (
        <div className="small">
            <div className="img"></div>
            <div className="div-small-div">
                <h2>მარათონის შესახებ ვრცელი ინფორმაცია იხილეთ აქ</h2>
                <button><p>ვრცლად <RiArrowRightDoubleFill className="arrow-icon-small"/></p></button>
            </div>
            
        </div>
    );
}
