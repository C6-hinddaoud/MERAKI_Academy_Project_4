import "./App.css";
import Intro from "./components/Intro";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import { useEffect ,useState,createContext,useContext } from "react";
import Register from "./components/Register";
import ReqesterPatient from "./components/RegisterAsPatient";
import Category from "./components/DoctorCategories";
 export const authorContext=createContext()




function App() {


  const[token,setToken]=useState("")
  return (
    <authorContext.Provider value={{token,setToken}}>

    
    <div className="App">
     
      <Routes>
   <Route path="/login" element={<Login/>}></Route>
      <Route path="/Intro" element={<Intro />} />
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/RegisterAsPatient" element={<ReqesterPatient/>}></Route>
      <Route  path="/Category"  element={<Category/>}></Route>
</Routes>
    </div>
    </authorContext.Provider>
  )
}

export default App;
