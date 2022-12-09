import { routes } from "../routes";
import MenuItem from "./menu/menuItem";

function Menu() {

    return <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu">
                <li className="nav-header">
                    <div className="dropdown profile-element">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#/">
                            <span className="block m-t-xs font-bold">Example user</span>
                            <span className="text-muted text-xs block">menu <b className="caret"></b></span>
                        </a>
                        <ul className="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a className="dropdown-item" href="login.html">Logout</a></li>
                        </ul>
                    </div>
                    <div className="logo-element">
                        IN+
                    </div>
                </li>
                {routes.map(route => <MenuItem {...route} />)}
            </ul>
        </div>
    </nav>;
}

export default Menu;