
const initialState = {
  items:[ {itemName: 'Bag', qty: 10, id: 1},
  {itemName: 'Pen', qty: 10,id: 2},
  {itemName: 'Bat', qty: 20,id: 3},
  {itemName: 'Hat', qty: 30,id: 4}],
  cart:["Bag"]
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      state.items.map((items)=>{
        if(items.id === action.payload){
          state.cart.push(items.itemName)
          return state;
        }
      })
      return state;
      break;

    default:
    return state

  }

}
