import axios from "axios"

import React from "react";
import "./style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect, useContext } from "react";
import { authorContext } from "../../App";
const NewReservation=()=>{
    const [message,setMesage]=useState("")
    const [date, setDate] = useState(new Date());
    const [time,setTime]=useState("")
    const [limittime,setlimittime]=useState([9,10,11,12,1,2,3])
    const [doctorRes,setDoctorRes]=useState("")
    const [patientRes,setPatientRes]=useState("")
const[nameBool,setNameBool]=useState(false)
const [resInfo,setResInfo]=useState({})
let [doc,setDOC]=useState([])
const [alldoctors,setallDoctorRes]=useState([])
    const author=useContext(authorContext)
    const token=author.token
    const setToken=author.setToken
    const specId=author.specId
    const setSpecId=author.setSpecId
    
   const  GetAllDoctorINTheSameSpcality=()=>{

axios.get(`http://localhost:5000/doctors/spicilaty/${specId}`)
.then((result) => {
    console.log(result);
    //GettALLspic()
  // setSpecialt(result.data.specialt);
  console.log("lklm" , result.data.specialt)
    setallDoctorRes(result.data.specialt)
    
    console.log("setDOC",doc)
  setMesage(result.data.message)
  })
  .catch((err) => {
    setMesage(err.response.data.message)
    throw err;
  });


    }


const addNewReservation=async()=>{

try{
 const result= await axios.post(`http://localhost:5000/reservation`,{
date,time,doctorRes
},
{
headers:{
    Authorization:`bearer ${token}`
},

})
console.log(result)
//.then((result) => {
  console.log("mkjiooooo")
    setResInfo(result.data.updatePatient);
    
  console.log(result.data.specialt)
   // setallDoctorRes(result.data.specialt)

   setTimeout(()=>{
  
  }, 5000);

   const  docrorName= alldoctors.length>0 && alldoctors.filter((elem,i)=>{
    return elem._id===resInfo.doctorRes
    
  })
  setNameBool(false)
    
    setDOC(docrorName)
    console.log("mk",docrorName)
  
    
  
  
  
  // console.log(docrorName)
  setMesage(result.data.message)

 // })
}
  catch(err){
    setMesage(err.response.data.message)
    throw err;
  };


}




const updateReservation= async()=>{
try{
  const result= await axios.put(`http://localhost:5000/reservation`,{
date,time,doctorRes
},
{
headers:{
    Authorization:`bearer ${token}`
},

})

setMesage(result.data.message)

if(result.data.success){

const newUpdateRes=result.map(()=>{})

}

}


catch(err){

  setMesage(err.response.data.message)
    throw err;
}

}





useEffect(()=>{
    GetAllDoctorINTheSameSpcality()
    
},[])
return(
    <div className="divmain">
<div>
<div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">
        {/* <input
          placeholder="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date.toDateString()}
        ></input>{" "} */}
        {/* {date.toDateString()} */}
      </div>
</div>

<div className="container" >
 <h1>Reservation</h1>
    <p>Please fill in this form to create an Reservation.</p>
    <hr></hr>
{/* 
    <label ><b>First Name</b></label>
    <input  type="text" placeholder="" name="firstName"  required></input> */}

    <label ><b>Reservation Date</b></label>
    <br></br>
    <input disabled={true}
          placeholder="date"
          onChange={(e) => {
            // setDate(e.target.value);
            // console.log(date)
          }}
          value={date.toDateString()}
        ></input>{" "}


    <div style={{ margin: "60px" }}>
          <label>
            <b>Docrors</b>
          </label>
          <br></br>
    <select
            onChange={(e) => {
              setDoctorRes(e.target.value);
              console.log(doctorRes)
              console.log("date",date)
            }}
          >
            { alldoctors.length>0 &&  alldoctors.map((elem, i) => {
              return (
                <option
                  value={elem._id}

                  // textContent={elem.specialty}
                >
                  {elem.name}
                </option>
              );
            })}
          </select>

</div>

    
<div style={{ margin: "60px" }}>
          <label>
            <b>Time</b>
          </label>
          <br></br>
    <select
            onChange={(e) => {
              setTime(e.target.value);
              console.log("time",time)
            }}
          >
            {   limittime.map((elem, i) => {
              return (
                <option
                  value={elem}

                  // textContent={elem.specialty}
                >
                  {elem}
                </option>
              );
            })}
          </select>

</div>



   
    <hr></hr>
    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

    <button onClick={addNewReservation}   class="registerbtn">Reservation</button>
   

    <div className="resDisplay"> 
    Doctor Name:{nameBool&& doc[0].name}<dr></dr><hr></hr>
    Time:{ resInfo.time}<dr></dr><hr></hr>
         Date: {resInfo.date}  </div>
    <button onClick={
     updateReservation
      } id="UpdateResevation"  class="registerbtn">Update</button>
    <button id="deleteResevation"   class="registerbtn">Delete</button>
    <p>{message}</p>
  </div>
  
  
  



</div>


)

}
export default NewReservation