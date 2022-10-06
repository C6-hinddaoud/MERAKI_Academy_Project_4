
import "./style.css"
import { useNavigate } from "react-router-dom"
const Navbar=()=>{
const navgate=new useNavigate()
    return(
        <div className="mainNav">

<div  className="mNav logh"><img src="./assets/images/l4 (1).jpg" ></img></div>
<div className="mNav" onClick={()=>{navgate("/About")}}>About </div>
<div className="mNav">a</div>
<div className="mNav">a</div>
<div className="mNav log"><img src="./assets/images/l2.png" ></img></div>

        </div>
    )
}
export default Navbar