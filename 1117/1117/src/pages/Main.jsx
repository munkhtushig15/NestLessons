import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const ProductsBox = ({ user }) => {
  console.log("user", user);
  return (
    <Link to={`/${user.id}`}>
      <div className="productBox">
        <p>{user.title}</p>
        <p>{user.brand}</p>
        <img className="prdctImages" src={user.images[0]} alt="" />
        <p>{user.price}$</p>
      </div>
    </Link>
  );
};

export default function Main() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });

  //hereglegchdin data awj bga

  const getData = async () => {
    const response = await instance.get(`products`);
    console.log(response);
    setData(response.data.products);
  };

  const getDataById = async () => {
    const response = await instance.get(`products/${id}`);
    setData([response.data]);
  };

  // const postData = async () => {
  //   const response = await instance.delete(`user/${id}`);
  //   setData(
  //     data.filter((e) => {
  //       return;
  //     })
  //   );
  // };

  useEffect(() => {
    getData();
  }, []);

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
    <div className="container">
      <div className="srchBoxContainer">
        <input
          placeholder="Search Here ..."
          className="srchBox"
          type="text"
          onChange={(e) => setId(e.target.value)}
        ></input>
        <button className="btnBox" onClick={getDataById}>
          Get
        </button>
      </div>
      <div className="inContainer">
        {data &&
          data.map((user) => {
            return <ProductsBox user={user} />;
          })}
      </div>
    </div>
  );
}
