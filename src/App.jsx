import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
<Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
