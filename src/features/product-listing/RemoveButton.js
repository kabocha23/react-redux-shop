import React, { Component } from 'react';

export default function RemoveButton(props) {

  return(
    <div>
      <button onClick={() => props.removeProductFromCart(props.cartProduct)}>
        Remove
      </button>
    </div>
  )

};

