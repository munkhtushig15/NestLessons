import "./App.css";
import Main from "./pages/Main.jsx";
import ProductNews from "./pages/ProductNews";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<ProductNews />} />
      </Routes>
    </BrowserRouter>
  );
}
