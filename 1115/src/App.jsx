import { useEffect, useState, useRef } from "react";
import axios from "axios";

const UserBox = ({ user }) => {
  console.log(user);
  return (
    <div style={{ border: "1px solid red" }}>
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
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)}></input>
      <button onClick={getDataById}>Get</button>

      {data &&
        data.map((user) => {
          return <UserBox user={user} />;
        })}
    </div>
  );
}