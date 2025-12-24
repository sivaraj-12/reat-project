import { Link } from "react-router-dom"
import "./Header.css"
import About from "../../List/about"
const Header=()=>{
    return <><h1 id="name">welcome</h1>
    <Link to="/about"> About </Link>
   <Link to="/contact">Contact</Link>
    </>
}
export default Header