import { useEffect, useState } from 'react';
import './App.css';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { useSelector } from 'react-redux';
import { useApply } from './redux/generalSlice';

function Number() {
    const number = useSelector<any, number>(state => state.number);
  
    return <b>{number}</b>;
  }

function App() {
    const [expanded, setExpanded] = useState(true);
    const apply = useApply();

    useEffect(() => {
        apply("number", 0);
        console.log("aqui!!");
    });

    const abrir = () => {
        var body = document.body;
        if (!expanded)
            body.classList.remove("mini-navbar");
        else
            body.classList.add("mini-navbar");

        setExpanded(!expanded);
    }

    return (
        <div id="wrapper">
            <nav className="navbar-default navbar-static-side" role="navigation">
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
                        <li className="active">
                            <a href="index.html"><i className="fa fa-th-large"></i> <span className="nav-label">Main view</span></a>
                        </li>
                        <li>
                            <a href="minor.html"><i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span> </a>
                        </li>
                    </ul>

                </div>
            </nav>

            <div id="page-wrapper" className="gray-bg" style={{ width: '100%' }}>
                <div className="row border-bottom">
                    <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
                        <div className="navbar-header">
                            <SidebarMenu.Header>
                                <SidebarMenu.Toggle onClick={() => abrir()} bsPrefix="navbar-minimalize minimalize-styl-2 btn btn-primary">
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
                </div>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <Number /><br />
                    <button onClick={() => apply("number", Math.random())}>Randomize</button>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center m-t-lg">
                                <h1>
                                    INSPINIA Static Seed Project for BS4
                                </h1>
                                <small>
                                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment for these projects.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="pull-right">
                        10GB of <strong>250GB</strong> Free.
                    </div>
                    <div>
                        <strong>Copyright</strong> Example Company &copy; 2014-2019
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;