import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import CartPage from './routes/CartPage';
import CheckoutPage from './routes/CheckoutPage';
import OrdersPage from './routes/OrdersPage';

const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/cart' component={CartPage} />
    <Route exact path='/checkout' component={CheckoutPage} />
    <Route path='/orders/:id' component={OrdersPage} />
  </Switch>
);

export default Router;