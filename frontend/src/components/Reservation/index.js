import axios from "axios"

import React from "react";
import "./style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect, useContext } from "react";
import { authorContext } from "../../App";
const NewReservation=()=>{
    const [message,setMesage]=useState("")
    /////////////////////////
    const [date, setDate] = useState("");
    const [time,setTime]=useState("")
    const [limittime,setlimittime]=useState([9,10,11,12,1,2,3])
    const [doctorRes,setDoctorRes]=useState("")
    const [patientRes,setPatientRes]=useState("")
    const[nameBool,setNameBool]=useState(false)
    const [resInfo,setResInfo]=useState({})
    let [doc,setDOC]=useState([])
    const [alldoctors,setallDoctorRes]=useState([])
    const [resevationDoctor,setResevationDoctor]=useState([])
const[doctorName,setDoctorName]=useState("")
const [calenderdate,setCalenderdate]=("")
    const [id,setID]=useState("")
    const author=useContext(authorContext)
    const token=author.token
    const setToken=author.setToken
    const specId=author.specId
    const setSpecId=author.setSpecId
    const [valueoo, setvalue] = useState(new Date());
    
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

const found=resevationDoctor.filter((elem)=>{
  console.log("oop",elem)
   console.log("er",elem.time,"er",time,"er",elem.date,"er",date)
  console.log("mnmnmnmnkk",elem.date)
  //&& date==elem.date 
if( elem.time==time.l   ){
  //console.log("ermnmnmn", elem.time,time,elem.date,date)
  return elem.time==time
}

})
console.log("go",found)
if (found.length>0){
  setMesage("This time has been booked. Please choose another time")
}
else{
console.log("mn",found)

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
    
  console.log("id",result.data.updatePatient._id)
  setID(result.data.updatePatient._id)
   // setallDoctorRes(result.data.specialt)

   setTimeout(()=>{
  
  }, 5000);

   const  docrorName= alldoctors.length>0 && alldoctors.filter((elem,i)=>{
    return elem._id===resInfo.doctorRes
    
  })
  setNameBool(false)
    
    setDOC(docrorName)
    //console.log("mk",docrorName)
  
    
  
  
  
  // console.log(docrorName)
  setMesage(result.data.message)

 // })
}
  catch(err){
    setMesage(err.response.data.message)
    throw err;
  };

}
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
  console.log(result)
console.log("lkomklojjl")
console.log("t",result.data.reservation.time)
console.log("s1",resInfo)
console.log("d",result.data.reservation.date)
console.log("s2",resInfo)
setResInfo(result.data.reservation)
//setResInfo(result.data.reservation.date)
const  docrorName= alldoctors.length>0 && alldoctors.filter((elem,i)=>{
  return elem._id===resInfo.doctorRes
  
})
setNameBool(false)

}

}


catch(err){

  setMesage(err.response.data.message)
    throw err;
}

}


const deleteReservation=async()=>{
  try{
    
    const result= await axios.delete(`http://localhost:5000/reservation/${id}`,
   {
   headers:{
       Authorization:`bearer ${token}`
   },
   
   })
   console.log(result)
   setResInfo("")
   
       
     console.log(result.data.specialt)
      // setallDoctorRes(result.data.specialt)
  
     // console.log(docrorName)
     setMesage(result.data.message)
   
    // })
   }
     catch(err){
       setMesage(err.response.data.message)
       throw err;
     };
   

}

const getallReservationInTheSameTime=async(id)=>{
  //console.log("ooooooooo",doctorRes)
try{
 // const id=doctorRes
const result=await axios.get(`http://localhost:5000/reservation/doc/${id}`)
setResevationDoctor(result.data)
setDoctorName(result.data[0].doctorRes.name)
console.log("resulttt",result.data[0].doctorRes.name
)
//console.log("res",resevationDoctor)

}
catch(err){
  console.log(err) 

}


}



useEffect(()=>{
    GetAllDoctorINTheSameSpcality()
    
},[])
return(
    <div className="divmain">
<div className="text-center">
<div className="calendar-container">
        <Calendar   onChange={setvalue} value={valueoo}/>
        {/* onChange={setDate} value={date} */}
      </div>
      <div className="text-center">
       {
    resevationDoctor.length>0&&   resevationDoctor.map((elem,i)=>{
return (<p> <span className="spanres">time:</span>{ elem.time } <span className="spanres" >date:</span>  {elem.date} </p>)

       })
       }
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
   {/* //disabled={true} */}
    <input 
          placeholder="date"
          // {setDate($("#nameofid").val())}
          onChange={(e) => {
            //valueoo.toDateString()
            setDate(e.target.value);
             console.log("mnj",date)
          }}
          
          value={valueoo.toDateString()}
        ></input>
       
{/* //date.toDateString() */}

    <div style={{ margin: "60px" }}>
          <label>
            <b>Docrors</b>
          </label>
          <br></br>
    <select placeholder="Select Doctor "
  
            onChange={(e) => {
              setDoctorRes(e.target.value);
              
              console.log(doctorRes)
             // console.log("date",date.toDateString())
              getallReservationInTheSameTime(e.target.value)
            }}
          >
          <option disabled selected value> -- select an Dector -- </option>
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
            <option disabled selected value> -- select an time -- </option>
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
    Doctor Name:{doctorName}  {nameBool&& doc[0].name}<dr></dr><hr></hr>
    Time:{ resInfo.time}<dr></dr><hr></hr>
         Date: {resInfo.date}  </div>
    <button onClick={
     updateReservation
      } id="UpdateResevation"  class="registerbtn">Update</button>
    <button id="deleteResevation" onClick={deleteReservation}  class="registerbtn">Delete</button>
    <p>{message}</p>
  </div>
  
  
  



</div>


)

}
export default NewReservation