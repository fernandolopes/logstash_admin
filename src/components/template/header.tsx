import { useState } from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';

function Header() {
    const [expanded, setExpanded] = useState(true);

    const openMenu = () => {
        var body = document.body;
        if (!expanded)
            body.classList.remove("mini-navbar");
        else
            body.classList.add("mini-navbar");

        setExpanded(!expanded);
    }

    return <div className="row border-bottom">
        <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
            <div className="navbar-header">
                <SidebarMenu.Header>
                    <SidebarMenu.Toggle onClick={() => openMenu()} bsPrefix="navbar-minimalize minimalize-styl-2 btn btn-primary">
                        <SidebarMenu.Nav.Icon><i className="fa fa-bars"></i></SidebarMenu.Nav.Icon>
                    </SidebarMenu.Toggle>
                </SidebarMenu.Header>
            </div>
            <ul className="nav navbar-top-links navbar-right">
                <li>
                    <a href="#/">
                        <i className="fa fa-sign-out"></i> Log out
                    </a>
                </li>
            </ul>

        </nav>
    </div>;
}

export default Header;