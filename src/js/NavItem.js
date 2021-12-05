import "../css/NavBar.css"
import {NavHashLink} from 'react-router-hash-link';

function NavItem(props) {
    return (
        <NavHashLink smooth style={{backgroundImage: 'url(' + props.to + '.jpg)', backgroundColor: 'green'}}
                     activeClassName={"ActiveNavLink"} className={"NavLink"} to={"#" + props.to}>
        </NavHashLink>
    )
}

export default NavItem;
