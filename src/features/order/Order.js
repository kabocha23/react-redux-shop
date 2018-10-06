import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchAPI from '../../modules/fetchAPI';

class Order extends Component {
  state = {
    order: null
  };

  componentDidMount() {
    fetchAPI('get', `http://student-example-api.herokuapp.com/v1/orders/${this.props.id}`)
      .then(json => {
        this.setState({
          order: json
        })
      })
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order; 
    return(
      <div>
        <h3>Order Info</h3>
        <div>Name: { name }</div>
        <div>Email: { email }</div>

        <h4>Items</h4>
        <ul>
          {
            order_items && order_items.map(product => {
              const { qty, product: { name, image, price } } = product;
              return(
                <li>
                  <img src={ image } width={ 32 } />
                  { name }
                  ({ qty } @ { price } = ${ parseFloat(qty) * parseFloat(price)})
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    const { order } =  this.state;
    return(
      <div>
        {
          order ? this.renderOrder() : "Loading..."
        }
      </div>
    )
  }
}

export default Order;