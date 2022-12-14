
import axios from "axios"

import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { authorContext } from "../../App";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
const ReqesterPatient=()=>{

const navgate=new useNavigate()
  const author=useContext(authorContext)
    const token=author.token
    const setToken=author.setToken
const[updatId,setupdatId]=useState(0)
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
  setupdatId(result.data.patient._id)
  setMesage(result.data.message)
 setUpdatesBool(true)
  })
  .catch((err) => {
    setMesage(err.response.data.message)
    throw err;
  });




    }




const upddatPatient=(updatId)=>{
  console.log(firstName)
  console.log(lastName)
  console.log(typeof(age))
  axios.put(`http://localhost:5000/patients/${updatId}`,{


    firstName,
   //lastName,
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

  })
  .catch((err) => {
    setMesage(err.response.data.message)
  
  });


}


const deletPatient=()=>{

  console.log(firstName)
  console.log(lastName)
  console.log(typeof(age))
  axios.delete(`http://localhost:5000/patients/${updatId}`)
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
        <div className="mainIntroDev">
<div className="imgregester"><img className="imgReg" src="./assets/images/docc1.png"></img></div>
<div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>
<div  className="dispaufourinput">
  <div>
    <label ><b>First Name</b></label>
    <input onChange={(e)=>{setFirstName(e.target.value)}} type="text" placeholder="Enter First Name" name="firstName"  required></input>
    </div>
    <div>
    <label ><b>Last Name</b></label>
    <input onChange={(e)=>{setLastName(e.target.value)}} type="text" placeholder="Enter Last Name" name="email"  required></input>
    </div>
    <div>
    <label ><b>Age</b></label>
    <input onChange={(e)=>{setAge(e.target.value)}} type="number" placeholder="Enter Your Age" name="email"  required></input>
    </div>
    <div>
    <label ><b>Country</b></label>
    
    <input onChange={(e)=>{setCountry(e.target.value)}} type="text" placeholder="Enter your Country" name="email"  required></input>
    </div>

    
    <div>
    <label ><b>Your Number Phone</b></label>
    <input onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder="Enter your Phone" name="email"  required></input>
    </div>
    <div>
    <label ><b>Email</b></label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter your Email" name="email"  required></input>
    </div>

    <div>
    <label ><b>Password</b></label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
    </div>
    
    </div>
    {/* <label ><b>Repeat Password</b></label>
    <input  type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input> */}
    <hr></hr>
    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

    <button  onClick={createNewPatient} className="registerbtn">Register</button>
    
   { updatesBool&& <div>
    <button onClick={()=>{upddatPatient(updatId)}}  className="registerbtnupdate">Update</button>
    <button onClick={deletPatient}  className="registerbtnbel">Delete</button>
    <button onClick={()=>{navgate("/Login")}}  className="registerbtnshow">Go TO Login</button>
    </div>
}
<div class="container signin Csmessge">
    <p>{message}</p>
  </div>


  </div>
 
  {/* <Popup trigger={<button> Trigger</button>} position="right center">
    <div><p>{message}</p></div>
  </Popup> */}
  


        </div>
    
    )

    
}
export default ReqesterPatient