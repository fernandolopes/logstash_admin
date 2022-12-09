import { Outlet } from "react-router-dom";

function Body() {

    return <div className="wrapper wrapper-content animated fadeInRight">
        <div className="row">
            <div className="col-lg-12">
                <Outlet />
            </div>
        </div>
    </div>;
}

export default Body;