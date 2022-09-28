
import axios from "axios"

import React from "react";
import "./style.css";

import { useState, useEffect, useContext } from "react";

const ReqesterPatient=()=>{
    const[message,setMesage]=useState("")
    const[firstName,setFirstName]=useState("")


    const[lastName,setLastName]=useState("")

    const[age,setAge]=useState("")
    const[country,setCountry]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const[phone,setPhone]=useState("")

    const createNewPatient=(req,res)=>{
axios.post(`http://localhost:5000/patients`,{


    firstName,
    lastName,
    age,
    country,
    email,
    password,
    phone

})
.then((result) => {
    console.log(result);
    //GettALLspic()
  // setSpecialt(result.data.specialt);
  setMesage(result.data.message)
  })
  .catch((err) => {
    setMesage(err.response.data.message)
    throw err;
  });




    }











    return(
        <div className="Mainreq">

<div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>

    <label ><b>First Name</b></label>
    <input onChange={(e)=>{setFirstName(e.target.value)}} type="text" placeholder="Enter First Name" name="firstName"  required></input>

    <label ><b>Last Name</b></label>
    <input onChange={(e)=>{setLastName(e.target.value)}} type="text" placeholder="Enter Last Name" name="email"  required></input>

    <label ><b>Age</b></label>
    <input onChange={(e)=>{setAge(e.target.value)}} type="text" placeholder="Enter Your Age" name="email"  required></input>

    <label ><b>Country</b></label>
    <input onChange={(e)=>{setCountry(e.target.value)}} type="text" placeholder="Enter your Country" name="email"  required></input>


   

    <label ><b>Your Number Phone</b></label>
    <input onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder="Enter your Phone" name="email"  required></input>


    <label ><b>Email</b></label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter your Email" name="email"  required></input>


    <label for="psw"><b>Password</b></label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input  type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
    <hr></hr>
    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

    <button  onClick={createNewPatient}  class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>{message}</p>
  </div>



        </div>
    
    )

    
}
export default ReqesterPatient