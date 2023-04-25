import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { FaRupeeSign } from 'react-icons/fa';

const CartItem = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

    const {prod_id, prod_images, description, name, price} = props.data

    console.log(props)
    console.log(cartItems)

  return (
    <div className='cartItem'>
    <img src={prod_images} alt='prodimages'/>
    <div className='cartDescription'>
        <div className='cart-name-price'>
            <p className='cart-name'><b>{name}</b></p> 
            <p className='cart-price'><FaRupeeSign/> {price}</p>
        </div>
        
        
        <div className='countHandler'>
            <button onClick={() => removeFromCart(prod_id)}> - </button>
            <input
                value={cartItems[prod_id]}
                onChange={(e) => updateCartItemCount(Number(e.target.value), prod_id)}
            />
            <button onClick={() => addToCart(prod_id)}> + </button>
        </div>
    </div>
    </div>
  )
}

export default CartItem