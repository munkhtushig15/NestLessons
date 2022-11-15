import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Main } from "./Components/Main";

function App() {
  let [data, setDatas] = useState([]);
  const [value, setValue] = useState();
  const request = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setDatas(res.data);
    });
  };
  useEffect(() => {
    request();
  }, []);
  console.log(data);
  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="App">
        {data.map((el) => {
          return el.name.includes(value) && <Main data={el} />;
        })}
      </div>
    </>
  );
}

export default App;

// import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
// import List from "./Components/List";
// import "./App.css";

// function App() {
//   const [inputText, setInputText] = useState("");
//   let inputHandler = (e) => {
//     //convert input text to lower case
//     var lowerCase = e.target.value.toLowerCase();
//     setInputText(lowerCase);
//   };

//   return (
//     <div className="main">
//       <h1>React Search</h1>
//       <div className="search">
//         <TextField
//           id="outlined-basic"
//           onChange={inputHandler}
//           variant="outlined"
//           fullWidth
//           label="Search"
//         />
//       </div>
//       <List input={inputText} />
//     </div>
//   );
// }

// export default App;
