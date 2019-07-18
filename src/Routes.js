import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home"
import Template1 from "./components/BlogTemplates/Template1";
import Template2 from "./components/BlogTemplates/Template2";
import Template3 from "./components/BlogTemplates/Template3";
import Template4 from "./components/BlogTemplates/Template4";
import Template5 from "./components/BlogTemplates/Template5";

const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path="/template1" component={Template1} />
            <Route path="/template2" component={Template2} />
            <Route path="/template3" component={Template3} />
            <Route path="/template4" component={Template4} />
            <Route path="/template5" component={Template5} />
            </Switch>
        </Router>
    )
}
export default Routes 