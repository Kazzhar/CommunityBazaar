import React, {useState, useEffect, useContext} from 'react'
import { supabase } from "../../config/supabaseClient"
import { ShopContext } from '../../Context/ShopContext'
import CartItem from './cart-item'
import "./cart.css"
import  logo from "../../Assets/3(white).png" 
import { useNavigate, useParams } from 'react-router'
import Payment from '../Payment/payment'

export const Cart = () => {
  const comm_id=useParams()
  console.log("this is from inside the cart, your comm_id is:", comm_id)
  const navigate = useNavigate();
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount();
  console.log("this is the total amount", totalAmount);
  console.log(cartItems, "first try inside cart.jsx")
    const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data, error } = await supabase
    .from('products')
    .select('*')

    if (error) {
      console.log(error)
    }
    if (data) {
        console.log(data) 
      setProducts(data)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  

  console.log(cartItems,"this is from inside cart")
  return (
    <div className="cart">
    <nav className="header-navbar">
      <a href="/">
      <img src={logo} alt="Logo" className="navbar-logo" />
      </a>
      <span className="navbar-community-name1"><b>Your Cart Items</b></span>
      <div className="navbar-links">
      </div>
    </nav>
    <div>To buy the items offline, please contact the sellers individually from the details enlisted in your community page</div>

        <div className='cart-items'>
            {products.map((product)=>{
                if(cartItems[product.prod_id] > 0) {
                    return <CartItem data={product}/>
                }
            })}
        </div>
        
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ₹{totalAmount} </p>
          <button onClick={() => navigate(`/home/${comm_id.comm_id}`)}> Continue Shopping </button>
          <p> Checkout: <Payment className="payments"/></p>
        </div>
      ) : (
        <div className="checkout1">
        <h3> Your Shopping Cart is Empty</h3>
        <button onClick={()=>navigate(`/home/${comm_id.comm_id}`)}>Continue Shopping</button>
        </div>
      )}
    </div>
  )
};

