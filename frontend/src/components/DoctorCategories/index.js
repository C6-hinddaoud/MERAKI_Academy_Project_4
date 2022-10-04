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


const navgate= new useNavigate()
    const [specialt, setSpecialt] = useState([]);
    const [message, setMesage] = useState("");
    const GettAllSpic= (req, res) => {
        axios
          .get(`http://localhost:5000/specialties`)
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
                  }}  className="registerbtn ">reservation</button>
                  </div>
              );
            })}

</div>
</div>
)
}
export default Category