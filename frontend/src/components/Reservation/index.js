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
    const [doctorRes,setDoctorRes]=useState("")
    const [patientRes,setPatientRes]=useState("")
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
  console.log(result.data.specialt)
    setallDoctorRes(result.data.specialt)
    
  setMesage(result.data.message)
  })
  .catch((err) => {
    setMesage(err.response.data.message)
    throw err;
  });


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
            setDate(e.target.value);
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
            }}
          >
            { alldoctors.length>0&&  alldoctors.map((elem, i) => {
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

    

   
    <hr></hr>
    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

    <button   class="registerbtn">Register</button>
  </div>
  
  
    <p>{message}</p>



</div>
)

}
export default NewReservation