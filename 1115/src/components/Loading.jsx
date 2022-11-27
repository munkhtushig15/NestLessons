import React from "react";
import ReactLoading from "react-loading";
import "../App.css";
  
export default function Loading() {
  return (
    <div className="loadingScreen" >
      {/* <ReactLoading type="balls" color="#0000FF" 
        height={100} width={50} />
      <ReactLoading type="bars" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="bubbles" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="cubes" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="cylon" color="#0000FF" 
        height={100} width={50} />
      <ReactLoading type="spin" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="spokes" color="#0000FF"
        height={60} width={60} /> */}
      <ReactLoading
        type="spinningBubbles"
        color="#fff"
        height={100}
        width={50}
      />
    </div>
  );
}