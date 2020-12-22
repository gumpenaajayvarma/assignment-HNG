import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Products from '../components/Products';

const Routes = () => <Switch>
    <Route path='*/brands/loreal-paris' component={Products} />
    <Route path='/' component={Home} />
</Switch>

export default Routes
