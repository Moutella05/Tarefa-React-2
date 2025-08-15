import { Link } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import Login from "../assets/Login.svg"
import Cart from "../assets/Cart.svg"

export default function Header(){
  return(
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px",}}>
      <Link to='/'>
        <img src={Logo}></img>
      </Link>
      <nav>
        <ul>
          <Link to='/Login'>
            <img src={Login}></img>
          </Link>
          <Link to='/Cart'>
            <img src={Cart}></img>
          </Link>
        </ul>
      </nav>
    </header>
  )
}