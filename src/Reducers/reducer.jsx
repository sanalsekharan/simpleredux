
const initialState = {
  items:[ {itemName: 'Bag', qty: 10, id: 1},
  {itemName: 'Pen', qty: 10,id: 2},
  {itemName: 'Bat', qty: 20,id: 3},
  {itemName: 'Hat', qty: 30,id: 4}],
  cart:[]
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      const newState = {items:[],cart:[]}
      state.items.map((items)=>{
        newState.items.push(items)
        if(items.id === action.payload){
          newState.cart.push(items.itemName)
          state.cart.map((cart)=>{
            if(cart != items.itemName){
              newState.cart.push(cart)
            }
          })
          return newState;
        }
      })
      return newState;
      break;

    default:
    return state

  }

}
