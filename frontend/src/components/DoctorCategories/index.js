import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import "./style.css"
import { authorContext } from "../../App";


const Category=()=>{

    const author=useContext(authorContext)
const token=author.token
const setToken=author.setToken
const specId=author.specId
const setSpecId=author.setSpecId
const[page,setpage]=useState(3)
const[p,setp]=useState(1)
const navgate= new useNavigate()
    const [specialt, setSpecialt] = useState([]);
    const [message, setMesage] = useState("");
    const GettAllSpic= (req, res) => {
      console.log("m",p)
console.log("k",page)
        axios
          .get(`http://localhost:5000/specialties?limit=${(3)}&page=${p}`)
          .then((result) => {
            console.log(result.data.specialt
              )
            setSpecialt(result.data.specialt);
            setMesage(result.data.message);
          })
          .catch((err) => {
            throw err;
          });
      };


// const goReservation=(req,res)=>{

//     navgate("/reservation")
//     setSpecId(elem._id)
// }

useEffect(()=>{

GettAllSpic()


},[])

return(
    <div>
<h1 className="reservationH1">Choose the medical specialty you want</h1>

<div className=" DivCate container">

{ specialt.length>0&&  specialt.map((elem, i) => {
              return (
                <div className=" containerr "
                  value={elem._id}

                  // textContent={elem.specialty}
                >
                 <h3> {elem.specialty}</h3>
                  <br></br>
                  <hr className="hrspicality"></hr>
                  <br></br>
                  <div>
                  <p className="pw">{elem.description}</p>
                  </div>
                  <br></br>
                  <div>
                    
             <img className="imgCatiegory" src={ elem.selectedImage}></img>
                  </div>
                  <button onClick={()=>{
                    navgate("/reservation")
                    setSpecId(elem._id)
                   // console.log("mkm",specId)
                  }}  className="registerbtnadd ">reservation</button>
                  </div>
              );
            })}

</div>
<button onClick={()=>{


// setpage(page+3) 
  setp(p+1)
console.log("m",p)
console.log("k",page)

  GettAllSpic()
  }
  } className="paging">
  Previous</button>
  <button onClick={()=>{


// setpage(page+3) 
  setp(p-1)
console.log("m",p)
console.log("k",page)

  GettAllSpic()}} className="paging">Next</button>
</div>
)
}
export default Category