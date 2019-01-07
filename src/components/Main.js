import React from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import {Form} from './Form'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/form' component={Form}></Route>
        </Switch>
    );
}

export { Main };
