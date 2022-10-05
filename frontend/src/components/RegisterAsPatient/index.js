
import axios from "axios"

import React from "react";
import "./style.css";

import { useState, useEffect, useContext } from "react";
import { authorContext } from "../../App";

const ReqesterPatient=()=>{


  const author=useContext(authorContext)
    const token=author.token
    const setToken=author.setToken

    const[message,setMesage]=useState("")
    const[firstName,setFirstName]=useState("")


    const[lastName,setLastName]=useState("")

    const[age,setAge]=useState("")
    const[country,setCountry]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const[phone,setPhone]=useState("")
const[updatesBool,setUpdatesBool]=useState(false)
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
    //GettALLspic()ccc
  // setSpecialt(result.data.specialt);
  
  setMesage(result.data.message)
 setUpdatesBool(true)
  })
  .catch((err) => {
    setMesage(err.response.data.message)
    throw err;
  });




    }




const upddatPatient=()=>{
  axios.put(`http://localhost:5000/patients`,{


    firstName,
    lastName,
    age,
    country,
    email,
    password,
    phone

},{
  headers:{
    Authorization:`bearer ${token}`
},

})
.then((result) => {
    console.log(result);
    //GettALLspic()ccc
  // setSpecialt(result.data.specialt);
  
  setMesage(result.data.message)

  })
  .catch((err) => {
    setMesage(err.response.data.message)
  
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


    <label ><b>Password</b></label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

    <label ><b>Repeat Password</b></label>
    <input  type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
    <hr></hr>
    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

    <button  onClick={createNewPatient} className="registerbtn">Register</button>
    
   { updatesBool&& <div>
    <button onClick={upddatPatient}  className="registerbtnupdate">Update</button>
    <button   className="registerbtnbel">Delete</button>
    <button   className="registerbtnshow">Show Your Information</button>
    </div>
}
  </div>
 
  
  <div class="container signin">
    <p>{message}</p>
  </div>



        </div>
    
    )

    
}
export default ReqesterPatient