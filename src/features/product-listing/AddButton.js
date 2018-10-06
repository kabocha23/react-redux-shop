import React, { Component } from 'react';

export default function AddButton(props) {

  return(
    <div>
      <button onClick={() => props.addProductToCart(props.product)}>
        Add to Cart ({ (props.cartProduct && props.cartProduct.quantity) || 0 })
      </button>
    </div>
  )

};

