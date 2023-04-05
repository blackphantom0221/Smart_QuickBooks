import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Importing components
import NavigationBar from "./components/NavigationBar";
import Input from "./components/Input";
import Hero from "./components/Hero";
import View from "./components/View";

//Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div>
          <Routes>
            <Route exact path="/" element={<Hero />}></Route>
            <Route path="/input" element={<Input />}>
              {" "}
            </Route>
            <Route path="/view" element={<View />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
