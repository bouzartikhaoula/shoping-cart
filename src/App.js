import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./component/Home";
import About from "./component/About";
import Store from "./component/Store";
import Navbar from "./component/Navbar";
import ShopingCartProvider from "./context/ShopingCartContext";

function App() {
  return (
    <>
    <ShopingCartProvider>
      <Navbar />
      <Container className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      </ShopingCartProvider>
    </>
  );
}
export default App;