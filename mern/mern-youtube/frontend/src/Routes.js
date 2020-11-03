import React from "react";
import { BrowserRoute, Switch, Route } from 'react-router-dom'; 
import Home from './core/Home';

const Routes = () => {
    return(
        <BrowserRoute>
        <Switch>
            <Route path="/" exact component={Home} />

        </Switch>
        </BrowserRoute>
    )
}


