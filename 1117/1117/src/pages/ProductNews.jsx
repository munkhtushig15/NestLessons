import "../App.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import Main from "./Main";
import { useEffect, useState } from "react";
import Loading from "../components/Loading"

export default function ProductNews() {
  const params = useParams();

  console.log("params", params);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getDataById = async (id) => {
    setIsLoading(true);
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getDataById(params.id);
  }, []);
  return (
    <div >
      {isLoading ? (
        <Loading/>
      ) : (
        <div className="productNewsContainer">
          <header>
            <Link className="noneDeco" to={`/`}>
              <p className="siteLogo">RANDOM+SITE</p>
            </Link>
            <p className="itHelpsYou">Store</p>
            <p className="itHelpsYou">Mac</p>
            <p className="itHelpsYou">AboutUs</p>
            <p className="itHelpsYou">Support</p>
            <p className="itHelpsYou">Home</p>
          </header>
          <div className="header">
            <div className="garchigAndMore">
              <p className="brendNew">New</p>
              <h1 className="newsTitle">{data.title}</h1>
              <span className="newsDescription">
                From ${data.price} or ${data.discountPercentage}/mo.per month for 24 mo.months before trade‑in*
              </span>
              <img className="newsImg" src={data.thumbnail} alt="" /> 
            </div>
            <div className="picks">
              <h2>General Information</h2>
              <span>{data.description}</span>
              <div className="priceAndMore">
                <p className="priceStyle">${data.price}</p>
                <p>Category : {data.category}</p>
                <p>Brand : {data.brand}</p>
              </div>
              <div className="info">
                <h1>Why this one is <span className="spclText">PERFECT</span></h1>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Numquam voluptatem sequi repellendus doloribus 
                  est impedit earum quidem consequatur, assumenda 
                  doloremque exercitationem ipsa totam asperiores. 
                  Saepe harum quae natus incidunt fuga adipisci, 
                  voluptatibus sed. Aliquam numquam molestias voluptas 
                  at ab voluptatibus necessitatibus quibusdam repudiandae 
                  nobis sed vero, quam dignissimos cupiditate laboriosam!
                </span>
              </div>
            </div>
          </div>
         
        </div>
      )}
    </div>
  );
}
