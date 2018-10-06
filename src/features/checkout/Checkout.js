import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../cart/Cart';
import CheckoutForm from './CheckoutForm';
import fetchAPI from '../../modules/fetchAPI';



const submitOrder = (values, cart) => {
  const { email, name } = values.order;

  fetchAPI('post', 'http://student-example-api.herokuapp.com/v1/orders.json', {
    order: {
      name,
      email,
      order_items_attributes: cart.map(product => ({
        product_id: product.id,
        qty: product.quantity
      }))
    }
  }).then(json => {
    if(json.errors) {
      console.log('error posting order')
    }
    document.location.href = `/orders/${json.id}`
  })
}

const Checkout = (props) => {

  const { cart } = props;
  return (
    <div className='checkout-container'>
      <div className='review-order'>
        <Cart />
      </div>

      <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>
    </div>
  )
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);