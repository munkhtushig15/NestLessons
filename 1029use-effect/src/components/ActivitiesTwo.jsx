import "../App.css";
import { Link } from "react-router-dom";

const ActivitiesTwo = ({TitleTwo, TextsTwo, ImageTwo, ToTwo}) => {
    return (
        <div className= "ActivitiesTwo">
            <div className="leftContainer">
                <div className="yeahh">
                    <h1>{TitleTwo}</h1>
                    <span>{TextsTwo}</span>
                    <Link to={ToTwo}>
                        Learn More
                    </Link> 
                </div> 
            </div>
            <img className="activitiesImg" src={ImageTwo} alt="" />
        </div>
    )
}

export default ActivitiesTwo;