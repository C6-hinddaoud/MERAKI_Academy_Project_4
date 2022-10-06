import "./App.css";
import Intro from "./components/Intro";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import { useEffect ,useState,createContext,useContext } from "react";
import Register from "./components/Register";
import ReqesterPatient from "./components/RegisterAsPatient";
import Category from "./components/DoctorCategories";
import NewReservation from "./components/Reservation";
import PatientInfo from "./components/PatientInfo";
import Specialty from "./components/AddReservation";
import Navbar from "./components/NavBar";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import Home from "./components/Home";

 export const authorContext=createContext()




function App() {


  //const[token,setToken]=useState("")

  const[token,setToken]=useState((localStorage.getItem("token"))||"");
  const [specId,setSpecId]=useState(0)
  return (
    <authorContext.Provider value={{token,setToken,specId,setSpecId}}>

    
    <div className="App">
     <div> <Navbar/></div>
      <Routes>
      <Route path="/" element={<Intro />}></Route>
   <Route path="/login" element={<Login/>}></Route>
      <Route path="/Intro" element={<Intro />} />
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/RegisterAsPatient" element={<ReqesterPatient/>}></Route>
      <Route  path="/Category"  element={<Category/>}></Route>
      <Route path="/reservation" element={<NewReservation/>}></Route>
      <Route path="/patient"   element={<PatientInfo/>}></Route>
      <Route path="/Specialty"   element={<Specialty/>}></Route>
      
      <Route path="/About"   element={<About/>}></Route>
      <Route path="/Contact"   element={<Contact/>}></Route>
      <Route path="/Home"   element={<Home/>}></Route>

      Contact
</Routes>
<div className="foter"> <div class="copyright">
        © Copyright <strong><span>Medicio</span></strong>. All Rights Reserved
      </div></div>
    </div>
    </authorContext.Provider>
  )
}

export default App;
