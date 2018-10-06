import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

let CheckoutForm = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        
        <div>
          <label htmlFor='order[name]'>Your Name:</label>
          <Field name='order[name]' component='input' type='text'/>
        </div>

        <div>
          <label htmlFor='order[email]'>Your Email:</label>
          <Field name='order[email]' component='input' type='text'/>
        </div>
        <button type='submit'>Submit Order</button>
      </form>
    </div>
  )
};

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm);

export default CheckoutForm;