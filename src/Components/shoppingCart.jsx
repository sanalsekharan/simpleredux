import React, { Component } from 'react'

export default class shoppingItems extends Component{
  render(){
    console.log('shopping cart',this.props);
    const cart = this.props.cartItems.map((items,key) =>{
      return(
        <ul key = {key}>
          <li>{items}</li>
        </ul>
      )
    })
    return(
      <div className = "shoppingCart">
        <h1>Buyer Cart </h1>
        {cart}
      </div>
    )
  }
}
