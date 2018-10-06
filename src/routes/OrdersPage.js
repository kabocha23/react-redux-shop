import React, { Component } from 'react';
import Order from '../features/order/Order';

export default function OrdersPage(props) {
  return (
    <div>
      <h2>My Orders</h2>
      <Order id={ props.match.params.id }/>
    </div>
  );
};