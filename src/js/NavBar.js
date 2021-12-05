import "../css/NavBar.css"
import NavItem from "./NavItem";

function NavBar(){
    return(
        <div className={"NavBar"}>
            <NavItem to={'1'}/>
            <NavItem to={'11'}/>
            <NavItem to={'2'}/>
            <NavItem to={'3'}/>
            <NavItem to={'9'}/>
            <NavItem to={'5'}/>
            <NavItem to={'8'}/>
            <NavItem to={'6'}/>
        </div>
    )
}

export default NavBar;