import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MenuActive } from "../../../@types";
import { useApply } from "../../../redux/generalSlice";

function setActiveStateThis(active: { [key: string]: string }, name: string) {
    const _active = { ...active };

    const keys = Object.keys(_active);
    keys.forEach(key => {
        _active[key] = "";
    });

    _active[name] = "active";

    return _active;
}

function MenuItem({ name, title, to }: any) {
    const active = useSelector<any, MenuActive>(state => state.active);
    const apply = useApply();

    const activeStateThis = setActiveStateThis(active, name);

    return <li className={active[name]} onClick={() => apply("active", activeStateThis)}>
        <Link to={to}><i className="fa fa-th-large"></i> <span className="nav-label">{title}</span></Link>
    </li>
}

export default MenuItem;