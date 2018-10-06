import React, { Component } from 'react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

export default function Product(props) {
  const { name, image, description, price } = props.product;
  const { cartProduct, product, addProductToCart, removeProductFromCart } = props;
  return (
    <div className='product-list-item'>
      <h3>{ name }</h3>
      <img
        height={ 100 }
        title={ name }
        src={ image }
      />
      <div>
        { description }
      </div>
      <div>
        ${ price }
      </div>
      <div>
        <AddButton 
          cartProduct={ cartProduct } 
          product={ product }
          addProductToCart={ addProductToCart }
        />
        {
           cartProduct
            ? <RemoveButton 
                cartProduct={ cartProduct } 
                product={ product }
                removeProductFromCart={ removeProductFromCart }
              />
            : null
        }
      </div>
    </div>
  )
}