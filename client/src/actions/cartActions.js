export const addToCart=(hand,quantity,varient)=>(dispatch , getState)=>{


    var cartItem = {
        name : hand.name,
        _id : hand._id,
        image : hand.image,
        varient : varient,
        quantity : Number(quantity),
        prices : hand.prices,
        price : hand.prices[0][varient]*quantity
    }


    if(cartItem.quantity>5){
        alert('You cannot add more than 5')
    }
    else{
        if(cartItem.quantity<1)
        {
            dispatch({type:'DELETE_FROM_CART', payload:hand})
        }
        else{
    dispatch({type:'ADD_TO_CART', payload: cartItem })
        }
    }
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

export const deleteFromCart = (hand)=>(dispatch,getState)=>{
    dispatch({type:'DELETE_FROM_CART', payload:hand})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}