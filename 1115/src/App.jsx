// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Loading from "./components/Loading";

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
  const [isLoading, setIsLoading] = useState(true);

  // const postData = async () => {
  //   const rosponse = await instance.delete(`user/${id}`);
  //   setData(
  //     data.filter((e) => {
  //       return;
  //     })
  //   );
  // };

  useEffect(() => {
    getData();
  }, []);
  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });

  const getData = async () => {
    setIsLoading(true);
    const rosponse = await instance.get(`user`);
    setData(rosponse.data.data);
    setIsLoading(false);
  };

  const getDataById = async () => {
    setIsLoading(true);
    const rosponse = await instance.get(`user/${id}`);
    setData([rosponse.data]);
    setIsLoading(false);
  };

  const deleteData = async () => {
    setIsLoading(true);
    const rosponse = await instance.delete(`user/${id}`);
    setData(
      data.filter((e) => {
        return e.id !== id;
      })
    );
    setIsLoading(false);
  };
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
      <div className="srchBoxContainer">
        <input
          placeholder="Search users..."
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
          RePost
        </button>
        <button className="btnBox" onClick={deleteData}>
          Delete
        </button>
      </div>
      <div className="userBoxContainer">
        {data && (
          data.map((user, id) => {
            return <UserBox key={id} user={user} />;
          })
        )}
      </div>
    </div>
      )}
    </>
  );
}
