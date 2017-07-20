import React, { Component } from 'react'
export default class shoppingItems extends Component{
  constructor(props){
    super(props)
    this.addItemToCart = this.addItemToCart.bind(this)
  }
  addItemToCart(key){
    this.props.addToCart(key);
  }
  render(){
    console.log(this.props.items);
    const products =  this.props.items.map((data)=>{
        return(<ul key= {data.id}>
          <li >
            <p>{data.itemName}</p>
            <button type= 'submit'  onClick ={() => {this.addItemToCart(data.id)}} >Add To Cart</button>

          </li>
        </ul>)
      })
    return(
      <div className = "shoppingItems">
        <h1>Shopping Items </h1>
        {products}
      </div>
    )
  }
}
