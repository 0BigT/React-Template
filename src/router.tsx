import {createBrowserRouter, createRoutesFromElements, Outlet, Route} from 'react-router-dom';
import NotFound from 'partials/App/NotFound';
import RoutingErrorHandler from 'partials/App/RoutingErrorHandler';
import './assets/styling/global.css';
import Home from 'pages/Home';

export default createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<RoutingErrorHandler />}>

            {/* public routes */}
            <Route index element={<Home />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

        </Route>
    )
);