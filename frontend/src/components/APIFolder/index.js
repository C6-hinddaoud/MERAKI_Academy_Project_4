import { useEffect, useState } from "react"
import "./style.css"
import axios from "axios"
const GetApi=()=>{
    const[mabeLine,setMabeLine]=useState([])
const Mabelin=()=>{
    
 axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
 
 .then((result)=>{
    console.log(result.data)
   setMabeLine(result.data)
     console.log(mabeLine)
 })
 .catch((err)=>{
    console.log(err)
 })



}

useEffect(()=>{
    Mabelin()
},[])
    return(
        <div>

<div className="prand">
    {mabeLine.length>0&&mabeLine.map((elem)=>{
return(
    <din className="mainbrand">
<div>{elem.brand}</div>
<div className="namediv"><p>{elem.name}</p></div>
<div>{elem.price}</div>
<div className="imgDivprand">  <img src={elem.image_link}></img>
</div>
</din>
)
    })}
</div>
        </div>
    )
}

export default GetApi