import "../App.css";
import Comment from "./Comment";

const Comments = () => {
    return (
        <div className="comments">
            <h1>What people say about us</h1>
            <div className="commentuud">
                <Comment name={"John Cena"} content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
                image={require("../images/Avatar.png")} star={[0,1,2,3]}/>
                <Comment name={"Jane Cooner"} content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
                image={require("../images/Avatar (1).png")} star={[0,1,2,3,4]}/>
                <Comment name={"Eleanor Pena"} content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
                image={require("../images/Avatar (2).png")} star={[0,1,2]}/>
                <Comment name={"Alexandra Eva"} content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
                image={require("../images/Avatar (3).png")} star={[0,1,2,3,4]}/>              
            </div>
            <div className="arrow">
                <img src={require("../images/sum.png")} alt="" />
            </div>
        </div>
    )
}

export default Comments;
