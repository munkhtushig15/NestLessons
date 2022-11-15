// import logo from './logo.svg';
// import './App.css';
// import Stopwatch from './components/timer';

// function App() {
//   return (
//     <Stopwatch  />
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import GetAccess from "./pages/GetAccess";
import Login from "./pages/LogIn";
import Services from "./pages/Services";
import { Main } from "./pages/Main";
// import {Button } from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col} from "react-bootstrap"

function App() {
  return (
    <div className="app">
      {/* <Container>
        <Row>
          <Col xs={12} md={8}>1st</Col>
          <Col xs={6} md={4}>2nd</Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>3rd</Col>
          <Col xs={6} md={4}>4th</Col>
          <Col xs={6} md={4}>5th</Col>
        </Row>
        <Row>
          <Col xs={6}>6th</Col>
          <Col xs={6}>7th</Col>
        </Row>
      </Container> */}
      {/* <Button variant="primary">Enable</Button>
        <Button variant="danger">Disable</Button>
        <Button variant="dark">NICE</Button> */}
      {/* <Header /> */}

      <Main />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getAccess" element={<GetAccess />} />
      </Routes>
      
    </div>
  );
}

export default App;
