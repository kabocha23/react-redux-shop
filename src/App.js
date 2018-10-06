import React, { Component } from 'react';
import Router from './Router';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigator = ({ cart }) => 
  <nav>
    <ul className='top-navigator'>
      <li>
        <NavLink to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/cart'>
          Cart ({ cart.reduce((acc, product) => {
            return acc + product.quantity
          }, 0) })
        </NavLink>
      </li>
      <li>
        <NavLink to='/checkout'>
          Checkout
        </NavLink>
      </li>
    </ul>
  </nav>

class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <Navigator { ...this.props }/>
        <Router />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(App));
