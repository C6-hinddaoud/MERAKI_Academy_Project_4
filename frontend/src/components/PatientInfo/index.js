import "./stylee.css"
import axios from "axios"
import { authorContext } from "../../App"
import { useState,useContext,useEffect } from "react"









const PatientInfo=()=>{

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

//     const GetALLPatientInTheSameDoctor=()=>{
// axios.get("http://localhost:5000/doctors/search_1",{
//     headers:{
//         Authorization:`bearer ${token}`
//     },
    
//     })
// .then()
// .catch()

//     }


const addMidicen=()=>{
axios.post("")


}







const patientDetael=(elem)=>{
 setOnElem(elem)
  setBollDiv(false)
}

const getAllPatientInTheSameDoctor=async()=>{

    try{
      const result= await axios.get(`http://localhost:5000/doctors/search_1`,
    {
    headers:{
        Authorization:`bearer ${token}`
    },
    
    })
   

 
    setMesage(result.data.message)
    
    
      console.log("ncn",result.data.specialt
      )
      console.log("m",result)
      setPatinfo(result.data.specialt)
    }
    
    catch(err){
    
      setMesage(err.response.data.message)
      //  throw err;
    }

}

const searchPatient=async()=>{

//let firstName=firstName




try{
    const result= await axios.get(`http://localhost:5000/doctors/search_2?firstName=${firstName}`,
  {
  headers:{
      Authorization:`bearer ${token}`
  },
  
  })
 
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
    console.log("m",result.data.patient
    )
    
  }
  
  catch(err){
  
    setMesage(err.response.data.message)
    //  throw err;
  }






}


useEffect(()=>{
    getAllPatientInTheSameDoctor()
    console.log(token)
   
},[])
    







return(<div className="patintDev">

    <div>navbar</div>
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
    <div className="divSimg">< img className="Simg" src="./images/gallery-3.jpg"></img></div>
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
          <b className="lblsinfo"> Patient prescription: {onElem.prescription}</b>
          
        </label>
        <input className="perInpur" type="text"></input>
        <button onClick={addMidicen}>AddToLIST</button>
        <button> Delete</button>
        <button>UPdate </button>
    </div>
   
    
    </div>
    <button onClick={()=>{setBollDiv(true)}}>Go Back</button>
    </div>}
</div>)

}
export default PatientInfo