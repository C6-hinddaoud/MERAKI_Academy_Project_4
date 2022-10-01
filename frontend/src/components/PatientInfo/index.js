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

//     const GetALLPatientInTheSameDoctor=()=>{
// axios.get("http://localhost:5000/doctors/search_1",{
//     headers:{
//         Authorization:`bearer ${token}`
//     },
    
//     })
// .then()
// .catch()

//     }

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
 
  const newsearch = result.data.patient.map((elem,i)=>{
    console.log("k")
    console.log("k",elem.firstName)
    console.log("k",firstName)
    return elem.firstName ==result.data.patient.firstName
  })
  console.log("n",setArray(newsearch))
  console.log(newsearch)
return array
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
    <div>
    <input onChange={(e)=>{setFirstName(e.target.value)}} className="searchInfo" type="text"></input>
    <button  onClick={searchPatient}  className="ptnSearc" type=""> Search</button>
    </div>
    <div>

       
    {  patInfoo.map((elem,i)=>{
   return <div>
<label className="lblInfp">
          
         {elem.firstName}

      
  
  </label > <button onClick={searchPatient} className="patientInfo">Patient  Information</button>
  </div>

})
}




   
        
    </div>
   <div><p>{message}</p></div>
</div>)

}
export default PatientInfo