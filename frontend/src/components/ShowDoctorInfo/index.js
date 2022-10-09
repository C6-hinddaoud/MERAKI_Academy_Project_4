import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { authorContext } from "../../App"
import "./style.css"

const ShowDoctot=()=>{

    const navgat=new useNavigate()
    const author=useContext(authorContext)
    const token=author.token
    const setToken=author.setToken
    const specId=author.specId
    const setSpecId=author.setSpecId
    const [message, setMesage] = useState("");
    const[doctorInfo,setDoctorInfo]=useState([])
    const [specialt, setSpecialt] = useState([]);
    const [specialty, setDdl] = useState("");
    const [ddlName, setDdlName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [Qualification, setQualification] = useState("");
    const[oneDive,setOneDive]=useState(true)
    const[towDive,setTowDive]=useState(false)
const[updatId,SetupdatId]=useState(0)
const gitallDoctors=()=>{
axios.get(`http://localhost:5000/doctors/allDoctors`)
.then((result)=>{

    console.log(result.data.patient
        )
setDoctorInfo(result.data.patient)
})
.catch((err)=>{

    console.log(err)
})
}

const deleteDoctor=(id)=>{
console.log(id)
axios.delete(`http://localhost:5000/doctors/delete/${id}`)
.then((result)=>{
    console.log(result._d)
   const newarray=doctorInfo.filter((elem)=>{
return(elem._id!==id)

   }
   
   )
       
setDoctorInfo(newarray)
})
.catch((err)=>{

    console.log(err)
})
}





const upddatDoctors=()=>{
    console.log(updatId)
    
    axios.put(`http://localhost:5000/doctors/update/${updatId}`,{
        name,
        salary,

        email,
        password,
        Qualification,

        specialty,
  
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






const GettALLspic = (req, res) => {
    axios
      .get(`http://localhost:5000/specialties`)
      .then((result) => {
        // console.log(result.data.specialt
        //   )
        setSpecialt(result.data.specialt);
        // setMesage(result.data.message);
      })
      .catch((err) => {
        throw err;
      });
  };
useEffect(()=>{
gitallDoctors()
GettALLspic()
},[])

return(<div>

{oneDive &&<div>

<div className=" shwDoc">
{ doctorInfo?.map((elem)=>{

return(
<div className="card">
  <img src="./assets/images/doc6.jpg" alt="Avatar" ></img>
  <div className="containershow">
    <h4><b>{elem.name}</b></h4> 
    <p>Qualification:{elem.Qualification}</p> 
    <p><button  onClick={()=>{setOneDive(false)
    setTowDive(true)
    SetupdatId(elem._id)
    }} className="registerbtnshowdoctor">Update </button> 
    <button onClick={()=>{deleteDoctor(elem._id)}} className="registerbtnbelDoctor">Delete</button></p>
  </div>
</div>
)
})}

</div>

<div><p><button className="registerbtnback" onClick={()=>{navgat(-1)}}> GoBack</button></p></div>

</div>
}
<div>
{towDive &&
  <div className="mainIntroDev">
  <div className="imgregester">
    <img  className="imgReg" src="./assets/images/doc4.jpg" alt="pic"></img>
    <button className="goBakebtnReg" onClick={()=>{setOneDive(true)
    setTowDive(false)
    
    }}>Go Back</button>
  </div>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>

    <label>
      <b>Doctor Name</b>
    </label>
    <input
      onChange={(e) => {
        setName(e.target.value);
      }}
      type="text"
      placeholder="Enter Doctor Name"
      name="email"
      required
    ></input>

    <label>
      <b> Qualification</b>
    </label>
    <input
      onChange={(e) => {
        setQualification(e.target.value);
      }}
      type="text"
      placeholder="Enter  Qualification"
      name="email"
      required
    ></input>

    <label for="email">
      <b>Salary</b>
    </label>
    <input
      onChange={(e) => {
        setSalary(e.target.value);
      }}
      type="text"
      placeholder="Enter Sallary"
      name="email"
      required
    ></input>
    {/*  */}
    <div className="spicalitydivnew" style={{ margin: "10px" }}>
      <label>
        <b>specialty</b>
      </label>
      {/* <input
        value={ddlName}
        type="text"
        placeholder="specialty"
        required
      ></input> */}

      <select
        onChange={(e) => {
          setDdl(e.target.value);
        }}
      >
        { specialt.length>0&&  specialt.map((elem, i) => {
          return (
            <option
              value={elem._id}

              // textContent={elem.specialty}
            >
              {elem.specialty}
            </option>
          );
        })}
      </select>

      {/*  */}
    </div>
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

    <label >
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

    {/* <label >
      <b>Repeat Password</b>
    </label>
    <input
      type="password"
      placeholder="Repeat Password"
      name="psw-repeat"
      id="psw-repeat"
      required
    ></input> */}
    <hr></hr>
    <p>{message}</p>

    <button onClick={upddatDoctors} className="registerbtnnew">
      Update
    </button>
  </div>
</div>

}
</div>

</div>
)

}
export default ShowDoctot