import "./App.css";
import Intro from "./components/Intro";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";

import Register from "./components/Register";

function App() {
  return (
    <div className="App">
     
      <Routes>
   <Route path="/login" element={<Login/>}></Route>
      <Route path="/Intro" element={<Intro />} />
      <Route path="/Register" element={<Register/>}></Route>
</Routes>
    </div>
  )
}

export default App;
