import React, { Component } from 'react';
import { connect } from 'react-redux';

const sort = (products) => {
  return products.sort((a,b) => 
    a.id > b.id
  )
}

const Cart = (props) => {
  const { cart, addProductToCart, removeProductFromCart, removeAllFromCart } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { 
          cart.length
          ?  sort(cart).map(product => 
              <tr>
                <td>{ product.name }</td>
                <td>{ product.quantity }</td>
                <td>
                  <button onClick={(e) => addProductToCart(product)}>+</button>
                  <button onClick={(e) => removeProductFromCart(product)}>-</button>
                </td>
                <td>
                  <button onClick={() => removeAllFromCart(product)}>Remove All From Cart</button>
                </td>
              </tr>
            )
          : <div>
              <h3>You have nothing in your cart</h3>
            </div>
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => {
      dispatch({
        type: 'ADD',
        payload: product
      })
    },
    removeProductFromCart: (product) => {
      dispatch({
        type: 'REMOVE',
        payload: product
      })
    },
    removeAllFromCart: (product) => {
      dispatch({
        type: 'REMOVE_ALL',
        payload: product
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)