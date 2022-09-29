import React from "react";
//import ContactsIcon from '../../images/contacts.webp';
import "./style.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Intro = () => {

  const navigate =useNavigate();
  return <div className="conternerintroDiv">

<div onClick={()=>{navigate("/login")}}  className="divIntro First"><h1>Login</h1></div>
<div  className="divIntro Secand"><h1>Registration</h1><input></input>
<button className="btnIsDoc" onClick={()=>{navigate("/Register")}} >Ok</button></div>

<div onClick={()=>{navigate("/RegisterAsPatient")}}  className="divIntro Secand"><h1> Patient Registration</h1></div>
  </div>;
};
export default Intro;
