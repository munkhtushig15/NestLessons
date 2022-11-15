import "../App.css"

export default function SearchBar() {
    return (
        <div className="srchBarContainer">
            <input type="text" placeholder="Search..." id="srchinp"/>
            <div className="chkBox">
                <input type="checkbox" name="lock" id="lock" />
                <span>Only show products in stock</span>
            </div>
        </div>
    )
}