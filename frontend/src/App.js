import "./App.css";
import Intro from "./components/Intro";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import { useEffect ,useState,createContext,useContext } from "react";
import Register from "./components/Register";
import ReqesterPatient from "./components/RegisterAsPatient";
import Category from "./components/DoctorCategories";
import NewReservation from "./components/Reservation";
 export const authorContext=createContext()




function App() {


 // const[token,setToken]=useState("")

  const[token,setToken]=useState((localStorage.getItem("token")||""))
  const [specId,setSpecId]=useState(0)
  return (
    <authorContext.Provider value={{token,setToken,specId,setSpecId}}>

    
    <div className="App">
     
      <Routes>
   <Route path="/login" element={<Login/>}></Route>
      <Route path="/Intro" element={<Intro />} />
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/RegisterAsPatient" element={<ReqesterPatient/>}></Route>
      <Route  path="/Category"  element={<Category/>}></Route>
      <Route path="/reservation" element={<NewReservation/>}></Route>
</Routes>
    </div>
    </authorContext.Provider>
  )
}

export default App;
