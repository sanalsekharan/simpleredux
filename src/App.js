import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import ShoppingItems from './Components/shoppingItems.jsx'
import ShoppingCart from './Components/shoppingCart.jsx'

class App extends Component {
  constructor(){
    super()
    this.addToBuyerCart = this.addToBuyerCart.bind(this)
  }
  addToBuyerCart(key){
    this.props.dispatch({type: "ADD_ITEM_TO_CART", payload: key})
  }

  render() {
    console.log(this.props);
      return (
        <div className= "mainContainer">
         <div className= "headerContainer">
           <h1>Shopping Cart</h1>
         </div>
         <div className="shoppingMainItems"><ShoppingItems items = {this.props.items} addToCart = {this.addToBuyerCart.bind(this)}/></div>
         <div className="shoppingMainCart"><ShoppingCart cartItems = {this.props.cart}/></div>
        </div>
      )
   }
}
function select(store) {
   return {
      items: store.items,
      cart: store.cart,
   }
}
export default connect(select)(App)
