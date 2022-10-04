import axios from "axios";
import React from "react";
import { useState,useContext,useEffect } from "react";
import { authorContext } from "../../App";
import { useNavigate } from "react-router-dom";
const Login = () => {

const navgate=new useNavigate()
  const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMesage]=useState("")
    const[box,setCheckbox]=useState(false)
   
   const author=useContext(authorContext)
const token=author.token
const setToken=author.setToken

const loginUser=(b)=>{
  return(req,res)=>{
  let i
  if(box===false){
     i=1
  }else if(box===true){
    i=0
  }
  console.log("poi")

console.log(i)
axios.post(`http://localhost:5000/login/${i}`,{
email,
password

})
.then((result) => {
  console.log(result);
  //GettALLspic()
  setToken(result.data.token);
// setSpecialt(result.data.specialt);
localStorage.setItem("token",result.data.token)

setMesage(result.data.message)
console.log( "mnmn", token)

// {
//   navgate("/Category");
// }
if(i==1){
const myTimeout = setTimeout(5000);
{
     navgate("/Category");
   }
  }else{ navgate("/patient")}
})
.catch((err) => {
  setMesage(err.response.data.message)
  throw err;
});

  }

}


  return <div>


<div className="mainIntroDev">
      <div className="imgregester">
        <img  className="" src="./assets/images/gallery-1.jpg" alt="pic"></img>
      </div>
      <div className="container">
        <h1>Login</h1>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>
        <label for="email">
          <b>Email</b>
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        ></input>

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        ></input>

<input onChange={(e)=>{setCheckbox(!box)

console.log(box)
}} type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
<label > Is Doctor</label><br></br>
        <hr></hr>
        <p>{message}</p>

        <button onClick={loginUser(box)} className="registerbtn">
          Login
        </button>
      </div>


</div>






  </div>;
};
export default Login;
