import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./App.css";

const UserBox = ({ user }) => {
  console.log(user);
  return (
    <div className="userBox">
      <p>{user.title}</p>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.id}</p>
    </div>
  );
};

export default function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });

  //hereglegchdin data awj bga

  const getData = async () => {
    const rosponse = await instance.get(`user`);
    setData(rosponse.data.data);
  };

  const getDataById = async () => {
    const rosponse = await instance.get(`user/${id}`);
    setData([rosponse.data]);
  };

  const deleteData = async () => {
    const rosponse = await instance.delete(`user/${id}`);
    setData(
      data.filter((e) => {
        return e.id !== id;
      })
    );
  };

  const postData = async () => {
    const rosponse = await instance.delete(`user/${id}`);
    setData(
      data.filter((e) => {
        return;
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);
  // const postData = async () => {
  //   const rosponse = await instance.post("", {});
  //   console.log(rosponse);
  // };

  // const updateData = async () => {
  //   const rosponse = await instance.patch("", {});
  //   console.log(rosponse);
  // };

  // const deleteData = async () => {
  //   const rosponse = await instance.delete("");
  //   console.log(rosponse);
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
        <button className="btnBox" onClick={getDataById}>
          Post
        </button>
        <button className="btnBox" onClick={getDataById}>
          Patch
        </button>
        <button className="btnBox" onClick={deleteData}>
          Delete
        </button>
      </div>

      {data &&
        data.map((user) => {
          return <UserBox user={user} />;
        })}
    </div>
  );
}
