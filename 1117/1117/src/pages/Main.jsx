import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import "../App.css";

const ProductsBox = ({ user }) => {
  console.log("user", user);
  return (
    <Link className="noneDeco" to={`/${user.id}`}>
      <div className="productBox noneDeco">
        <p className="brndProduct noneDeco">{user.brand}</p>
        <img className="prdctImages" src={user.images[0]} alt="zuragLBsiim" />
        <div className="infoContainer">
          <h3 className="prdctTitle noneDeco">{user.title}</h3>
          <p className="prdctDescrip noneDeco">{user.description}</p>
        </div>
        <p className="priceStyle noneDeco">${user.price}</p>
      </div>
    </Link>
  );
};

export default function Main() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });
  
  useEffect(() => {
    getData();
  }, []);

  //hereglegchdin data awj bga

  const getData = async () => {
    setIsLoading(true);
    const response = await instance.get(`products`);
    console.log(response);
    setData(response.data.products);
    setIsLoading(false);
  };

  const deleteData = async () => {
    setIsLoading(true);
    const response = await instance.delete(`products/${id}`);
    setData(
      response.filter((e) => {
        return e.id !== id;
      })
    );
    setIsLoading(false);
  };

  const getDataById = async () => {
    setIsLoading(true);
    const response = await instance.get(`products/${id}`);
    setData([response.data]);
    setIsLoading(false);
  };

  // const postData = async () => {
  //   const response = await instance.delete(`user/${id}`);
  //   setData(
  //     data.filter((e) => {
  //       return;
  //     })
  //   );
  // };

  // const postData = async () => {
  //   const response = await instance.post("", {});
  //   console.log(response);
  // };

  // const updateData = async () => {
  //   const response = await instance.patch("", {});
  //   console.log(response);
  // };

  // const deleteData = async () => {
  //   const response = await instance.delete("");
  //   console.log(response);
  // };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="srchBoxContainer">
            <input
              placeholder="Search Here ..."
              className="srchBox"
              type="text"
              onChange={(e) => setId(e.target.value)}
            ></input>
            <button className="btnBox gradient-text" onClick={getDataById}>
              Get
            </button>
            <button className="btnBox gradient-text" onClick={deleteData}>
              Dlt
            </button>
          </div>
          <div className="inContainer">
            {data &&
              data.map((user) => {
                return <ProductsBox user={user} />;
              })}
          </div>
        </div>
      )}
    </>
  );
}
