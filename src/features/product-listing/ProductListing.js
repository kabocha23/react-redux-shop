import React, { Component } from 'react';
import Product from './Product'
import { connect } from 'react-redux';

import fetchAPI from '../../modules/fetchAPI'


class ProductListing extends Component {
  
  componentDidMount() {

    const { loadProducts } = this.props;
    fetchAPI('get', 'http://student-example-api.herokuapp.com/v1/products.json')
    .then((json => {
      loadProducts(json)
    }))
  }

  render() {
    const { products, addProductToCart, removeProductFromCart, cart } = this.props
    return (
      <div className='product-listing'>
        {
          products.map(product => 
            <Product 
              product={product}
              addProductToCart={addProductToCart}
              removeProductFromCart={removeProductFromCart}
              cartProduct={cart.filter(cartProduct => cartProduct.id === product.id)[0]}
            />  
          )
        }
      </div>
    )
  };


}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => {
      dispatch({ type: 'ADD', payload: product })
    },
    removeProductFromCart: (product) => {
      dispatch({ type: 'REMOVE', payload: product })
    },
    loadProducts: (products) => {
      dispatch({ type: 'LOAD', payload: products })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);