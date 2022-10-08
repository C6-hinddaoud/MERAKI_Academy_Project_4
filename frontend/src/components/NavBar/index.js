
import "./style.css"
import { useNavigate } from "react-router-dom"
import { authorContext } from "../../App"
import { useContext } from "react"
const Navbar=()=>{
    const author=useContext(authorContext)
    const token=author.token
    const setToken=author.setToken
const logout=()=>{
    localStorage.clear();
    setToken(null)


    navgate("/login")
}

const navgate=new useNavigate()
    return(
        <div className="mainNav">

<div onClick={()=>{navgate("/Home")}} className="mNav logh"><img src="./assets/images/l4 (1).jpg" ></img></div>
<div className="mNav" onClick={()=>{navgate("/About")}}>About </div>
<div className="mNav"onClick={()=>{navgate("/Contact")}}>Contact</div>
<div className="mNav"onClick={()=>{navgate("/GetApi")}}>Advertisement </div>
<div className="mNav"onClick={()=>{navgate("/intro")}}>Introduction</div>
<div className="mNav log"><img src="./assets/images/l2.png" onClick={logout}></img></div>

        </div>
    )
}
export default Navbar