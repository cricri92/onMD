import React from 'react';
import {Route, Switch} from "react-router-dom";

import mainRoutes from "routes/mainRoutes";

const MainRoutes = () => {
    const routes = [
        ...mainRoutes,
    ];

    return (
        <Switch>
            {
                routes.map(({path, Component}) => (
                    <Route path={path} exact>
                        <Component />
                    </Route>
                ))
            }
        </Switch>
    )
}

export default MainRoutes;
