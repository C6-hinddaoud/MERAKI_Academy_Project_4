import { useState } from "react";



const Specialty=()=>{
    const [selectedImage, setSelectedImage] = useState(null);
return(
    <div className="res"> 
    <div className="res">
        
   

return (
  <div className="of">
    <h1>Upload and Display Image usign React Hook's</h1>
    {true && (
      <div>
      <img alt="not fount" width={"100px"} src={`./images/${selectedImage}`  }></img>
      <br />
      <button onClick={()=>setSelectedImage(null)}>Remove</button>
      </div>
    )}
    <br />
   
    <br /> 
    <input
      type="file"
      name="myImage"
      onChange={(event) => {
        console.log("ll",event.target.files[0]);
        setSelectedImage(event.target.files[0]);
      }}
    />
  </div>
);
        
        </div>
        <div className="mb-1">
     Image <span className="font-css top">*</span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle"/>
     </div>
</div>
        
        </div>
)

    
}
export default Specialty