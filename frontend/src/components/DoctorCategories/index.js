import React from "react";
import axios from "axios";

import { useState,useContext,useEffect } from "react";
import "./style.css"


const Category=()=>{

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

useEffect(()=>{

GettAllSpic()


},[])

return(
    <div>
<h1>Choose the medical specialty you want</h1>

<div className=" DivCatecontainer">

{ specialt.length>0&&  specialt.map((elem, i) => {
              return (
                <div className=" container "
                  value={elem._id}

                  // textContent={elem.specialty}
                >
                  {elem.specialty}
                  <br></br>
                  <button onClick={reservation} className="registerbtn ">reservation</button>
                  </div>
              );
            })}

</div>
</div>
)
}
export default Category