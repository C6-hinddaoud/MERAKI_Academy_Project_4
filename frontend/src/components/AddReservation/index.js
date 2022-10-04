import axios from "axios";
import { base64encode } from "nodejs-base64";
import { useContext, useState } from "react";
import { authorContext } from "../../App";
// import { Buffer} from Buffer
import"./style.css"

const Specialty=()=>{



  const author=useContext(authorContext)
  const token=author.token
  const setToken=author.setToken
  const [message, setMesage] = useState("");
const[description,setDescription]=useState("")

const [selectedImage, setSelectedImage] = useState(null);
const[specialty,setSpecialty]=useState("")
const [image, setImage] = useState(null);


const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

// let encoded = base64encode(image);
const Addspecialty=()=>{
console.log("KI")
console.log("Kttttt", typeof(selectedImage))
console.log("KI",specialty)
console.log("KI",)
  axios.post("http://localhost:5000/specialties",{selectedImage:image,specialty,description},{
    headers:{
        Authorization:`bearer ${token}`
    },
    
    })
  .then((result)=>{
    console.log(result)
    setMesage(result.data.message);
  })
  .catch((err)=>{
    console.log(err)
    //setMesage(err.res.data.message);
  })

}

const uploadImage=async(file)=>{
  const base64= await convertBase64(file);
  console.log(base64)
  setImage(base64)
  console.log(image)
}
return(
    <div className="res"> 
    <div className="res">
        
   


  <div className="of">
    <h1>Add a New Medical Department</h1>


    <label>
          <b>Medical Department</b>
        </label>
        <input
          onChange={(e) => {
            setSpecialty(e.target.value);
          }}
          type="text"
          placeholder="Enter medical department"
          
          required
        ></input>

<label>
          <b>Medical Department Description</b>
        </label>
        <textarea className="Description"  rows={5}
         

          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="input"
          placeholder="Enter medical Description"
          
          required
        ></textarea>
    {selectedImage && (
      <div>
      {/* <img alt="not fount" width={"20%"} src={`./assets/images/${selectedImage}`  }></img> */}
      <img alt="not fount" width={"80%"} height={"1%"} src={URL.createObjectURL(selectedImage)} />
      <br />
      <button className="registerbtnmove" onClick={()=>setSelectedImage(null)}>Remove</button>
      </div>
    )}
    <br />
   
    <br /> 
    {/* <input
    className="registerbtnn"
      type="file"
      name="myImage"
      onChange={(event) => {
        console.log("ll",event.target.files[0]);
        setSelectedImage(event.target.files[0]);
      }}
    /> */}

<input
    className="registerbtnn"
      type="file"
      name="myImage"

      onChange={(event) => {
        console.log("ll",event.target.files[0]);
       
        uploadImage(event.target.files[0]);
        console.log("m",image)
        setSelectedImage(event.target.files[0]);
      }}
    />

<button className="registerbtn" onClick={Addspecialty}>Add New Specialty</button>
  </div>

        
        </div>
      
        
        </div>
)

    
}
export default Specialty