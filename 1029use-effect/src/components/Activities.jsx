import "../App.css";
import { Link } from "react-router-dom";

const Activities = ({Title, Texts, Image, To}) => {
    return (
        <div className= "Activities">
            <div className="leftContainer">
                <div className="yeahh">
                    <h1>{Title}</h1>
                    <span>{Texts}</span>
                    <Link to={To}>
                        Learn More
                    </Link> 
                </div> 
            </div>
            <img className="activitiesImg" src={Image} alt="" />
        </div>
    )
}

export default Activities;