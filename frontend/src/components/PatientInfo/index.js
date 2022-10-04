import "./stylee.css"
import axios from "axios"
import { authorContext } from "../../App"
import { useState,useContext,useEffect } from "react"

import { useNavigate } from "react-router-dom"







const PatientInfo=()=>{
const navgat=new useNavigate()
    const author=useContext(authorContext)
    const token=author.token
    const setToken=author.setToken
    const specId=author.specId
    const setSpecId=author.setSpecId
    const [message, setMesage] = useState("");
    const [patInfoo,setPatinfo]=useState([])
    const [firstName, setFirstName] = useState("");
const[array,setArray]=useState([])
const[bollDiv,setBollDiv]=useState(true)

const[onElem,setOnElem]=useState({})
const[medicine,setMedicine]=useState([])
const[arrayMedicine,setArrayMedicine]=useState([])

const [seArchBool,setSeArchBool]=useState(true)
const [medo,setmedo]=useState("")
//     const GetALLPatientInTheSameDoctor=()=>{
// axios.get("http://localhost:5000/doctors/search_1",{
//     headers:{
//         Authorization:`bearer ${token}`
//     },
    
//     })
// .then()
// .catch()

//     }

// 
const patientDetael=(elem)=>{
  console.log("detils")
 setOnElem(elem)
 const med=elem.prescription
 {setMedicine(med)}
 console.log("nv",medicine)
  setBollDiv(false)
}


const addMidicen=()=>{
axios.post(`http://localhost:5000/prescription/${onElem._id}`,{medicine:medo})
.then((result)=>{
  console.log(result)
  let newresult=result.data.updatePatient.medicine
console.log(newresult)
  //console.log("re",result)
  setMedicine([...medicine,newresult])
  console.log("pof",medicine)
  console.log("med",medicine)
})
.catch((err)=>{
  console.log(err)
})

}









const getAllPatientInTheSameDoctor=async()=>{
  
    try{
      const result= await axios.get(`http://localhost:5000/doctors/search_1`,
    {
    headers:{
        Authorization:`bearer ${token}`
    },
    
    })

    // {setMedicine(result.data.specialt.prescription)} 

 
    setMesage(result.data.message)
    
    
      console.log("ncn",result.data.specialt.prescription)
      console.log("m",result)
    //  {setMedicine(result.data.specialt.prescription)} 
      console.log("medicine" ,medicine)
      setPatinfo(result.data.specialt)
    }
    
    catch(err){
    
      setMesage(err.response.data.message)
      //  throw err;
    }

}

const searchPatient=async()=>{

// if(!firstName){
//   return(patInfoo)
// }




try{
    const result= await axios.get(`http://localhost:5000/doctors/search_2?firstName=${firstName}`,
  {
  headers:{
      Authorization:`bearer ${token}`
  },
  
  })
  console.log("mmmmm",result)
 if(result.data.patient.length>0){
//   const newsearch = patInfoo.filter((elem,i)=>{
//     console.log("ru",result)
//     console.log("k",elem.firstName)
//   let nr=  console.log("k",result.data.patient.map((elem,i)=>{
// return[elem.firstName]
//     }))
//     return elem.firstName ==JSON.stringify( nr)
//   })
setPatinfo(result.data.patient)
  console.log( "okok", patInfoo)
//return array
  setMesage(result.data.message)
  
  
    console.log("ncn",result.data
    )
    console.log("m",result.data.patient.specialt.prescription

    )
 }else{
  setMesage("There is no patient with this name")
  setPatinfo([])
 }
  }
  
  catch(err){
  
    setMesage(err.response.data.message)
    //  throw err;
  }






}


useEffect(()=>{
  if(!patInfoo.length>0){
    getAllPatientInTheSameDoctor()
  }
   // console.log(token)
   
},[])
    







return(<div className="patintDev">

    <div  className="navbardoc">
    <div className="NAV"><img className="imglogo" src="./assets/images/logo.png"></img></div>
<div  onClick={()=>{navgat('/Register')}} className="NAV">Show Doctor Information</div>
<div className="NAV" onClick={()=>{navgat('/Specialty')}}    > Add New specialty </div>

      <div onClick={()=>{navgat('/Register')}}  className="NAV">  Add New Doctor </div>
    </div>
    {bollDiv?
    <div>
    <div className="sI">
    <input onChange={(e)=>{setFirstName(e.target.value)
     }} className="searchInfo" type="text"></input>
    <button  onClick={searchPatient}  className="ptnSearc" type=""> Search</button>
    </div>
    <div>

       
    {  patInfoo.map((elem,i)=>{
   return <div>
<label className="lblInfp">
          
         {elem.firstName}

      
  
  </label > <button onClick={()=>{patientDetael(elem)}} className="patientInfo">Patient  Information</button>
  </div>

})
}




   
        
    </div>
   <div><p>{message}</p></div>
   </div>
   :<div>
    
    
    <div className="secinf">
    <div className="divSimg">< img className="Simg" src="./assets/images/doc1.jpg"></img></div>
    <div className="lblDiv">
    <label className="lblsinfo">
          <b className="lblsinfo"> Patient Name: {onElem.firstName}</b>
        </label>
        <label className="lblsinfo">
          <b className="lblsinfo"> Family Name: {onElem.lastName}</b>
        </label>
        <label className="lblsinfo">
          <b className="lblsinfo"> Patient Age: {onElem.age}</b>
        </label>
        <label className="lblsinfo">
          <b className="lblsinfo"> Patient country: {onElem.country}</b>
        </label>
        <label className="lblsinfo">
          <b className="lblsinfo"> Patient phone: {onElem.phone}</b>
        </label>
        <label className="lblsinfo">
          <b className="lblsinfo"> Patient prescription: {medicine.length>0&&medicine.map((elem)=>{

            return(<div className="precDiv">{elem}</div>)
          })}</b>
          {/* {setMedicine(onElem?.prescription)} */}
        </label>
        <input onChange={(e)=>{setmedo(e.target.value)}} className="perInpur" type="text"></input>
        <button onClick={addMidicen}>AddToLIST</button>
        <button> Delete</button>
        <button>UPdate </button>
    </div>
   
    
    </div>
    <button className="goBack" onClick={()=>{setBollDiv(true)}}>Go Back</button>
    </div>}
</div>)

}
export default PatientInfo