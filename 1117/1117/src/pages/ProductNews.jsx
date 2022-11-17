import "../App.css";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function ProductNews() {
  const params = useParams();
  const location = useLocation();

  console.log("params", params);

  const [data, setData] = useState({});

  const getDataById = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getDataById(params.id);
  }, []);
  return (
    <div className="productNewsContainer">
      {data && (
        <div>
          <img src={data.thumbnail} alt="" />
        </div>
      )}
    </div>
  );
}
