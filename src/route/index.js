import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Portfolio from "../portfolio"
import App from "../App"

export default function UrlRoute() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route exact path="/demo" component={App} />
            </Switch>
        </BrowserRouter>
    )
}