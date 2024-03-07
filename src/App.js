import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Body/Main/Main";
import Foods from "./Component/Body/Posts/Foods/Foods";
import Food from "./Component/Body/Posts/Food/Food";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element=<Main /> />
            <Route path="/Foods" element=<Foods /> />
            <Route path="/Foods/:title" element=<Food /> />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
