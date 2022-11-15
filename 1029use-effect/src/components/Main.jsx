import "../App.css";


const Instant = ({title, text}) => {
    return (
        <div className= "Instant">
            <h1>{title}</h1>
            <span>{text}</span>
            <div className="searchContainer">
                <input type="text" id="srchInpt" placeholder="Email" />
                <button className="srchBtn">Get early access</button>
            </div>
        </div>
    )
}

export default Instant;