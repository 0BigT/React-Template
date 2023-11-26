import {createBrowserRouter, createRoutesFromElements, Outlet, Route} from 'react-router-dom';
// import NotFound from 'UI/App/Partials/App/NotFound';
// import RoutingErrorHandler from 'UI/App/Partials/App/RoutingErrorHandler';
import './assets/styling/global.css';
import Home from 'Pages/Home';


export default createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={"Error"}>

            {/* public routes */}
            <Route index element={<Home />} />

        </Route>
    )
);