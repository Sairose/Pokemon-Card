import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";


export const NavBar = () =>{
    let toggle = true;

    const open = () =>{
        let link =document.querySelector(".nav-head");
        // console.log(link)
        if(toggle){
            link.style.right = "0px";
            toggle = false;
        }else{
            link.style.right = "-200px";
            toggle = true;
        }

    }
    

    return(
        <nav>
            <img src="pokemonlogo-transformed.png" alt="" />
            <div className="nav-head">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pokemon-card">PokemonCard</NavLink>
            </div>
            <FaBars className="fa-bars"
                onClick={open}
            />
        </nav>
    )
}