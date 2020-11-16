import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/login';
import Event from './pages/Event/event';
import Customer from './pages/Customer/customer';
import User from './pages/User/user';
import Inventario from './pages/Products/inventario';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/user" component={ User } />
                <Route path="/event" component={ Event } />
                <Route path="/customer" component={ Customer } />
                <Route path="/inventario" component={ Inventario } />
            </Switch>
        </BrowserRouter>
    );
}