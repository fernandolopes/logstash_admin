import { createBrowserRouter } from "react-router-dom";
import Components from './';
import Pipeline from "./pipelines";

export const routes = [
    {
        name: "home",
        title: "Home",
        to: "/",
        path: "/",
        element: <Components />
    }, {
        name: "pipelines",
        title: "Pipelines",
        to: "/pipelines",
        path: "/pipelines",
        element: <Pipeline />
    }
];

const browserRouter = createBrowserRouter([{
    ...routes.find(r => r.path === "/"),
    children: routes.filter(r => r.path !== "/")
}]);

export default browserRouter;