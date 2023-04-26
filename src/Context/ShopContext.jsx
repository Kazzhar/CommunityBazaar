import React, { createContext, useState, useEffect } from 'react'
import { supabase } from '../config/supabaseClient'

export const ShopContext = createContext(null)
// let [products, setProducts]=useState([]);
const ShopContextProvider = (props) => {
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

      console.log("these are products",products)


    // const getDefaultCart = () => {
        const cart = {};
        for (let i = 0; i < products.length; i++) 
        {
            console.log("1", products[i])
          let ind = products[i].prod_id;
          console.log("this is index",ind)
          cart[ind] = 0;
        }
        console.log("cart items must be initialized to 0");
        console.log(cart);
        console.log("the cart items have been initialized to 0")
        // return cart;
    //   };

    //   console.log("this is the value the default cart func returns",getDefaultCart())
      
  const [cartItems, setCartItems] = useState(cart)
  console.log("this is the value of cart before we set it",cart)
// setCartItems(cart);
    console.log("done setting cartItems")
    console.log("this is the value of cartItems", cartItems)

  
//   const [cart, setCartItems] = useState([])
  // console.log("this is the cartItems thing after using default state",cartItems)
  useEffect(() => {
    console.log("Updated cart items:", cartItems);
  }, [cartItems]);
  
  
//   const getTotalCartAmount = ()=>{
//     let totalAmount = 0
//     for(const item in cartItems){
//         if(cartItems[item]>0){
//             let itemInfo = products.find((product))
//         }
//     }
//   }
//   const addToCart = (itemId) => {
//     console.log(itemId) // b7f3d609-e6bc-442a-b264-e0d01a7dfcd2
//     setCartItems((prev) => (
//         // console.log("previously added to card",prev) // Object { "b7f3d609-e6bc-442a-b264-e0d01a7dfcd2": NaN }
//          { ...prev, [itemId]: prev[itemId] + 1 }
//   )) 
//   }

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      console.log(products,"from inside the gettotalamount")
      let itemInfo = products.find((product) => product.prod_id === (item));
      totalAmount += cartItems[item] * itemInfo.price;
    }
  }
  return totalAmount;
};

const addToCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : +1
      // [itemId]: prev[itemId]+1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ 
        ...prev, 
        [itemId]: prev[itemId] ? prev[itemId] - 1 : 0 
      }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ 
        ...prev, 
        [itemId]: newAmount }))
  }

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }

  console.log("final check before returning cartItems", cartItems)

  return <ShopContext.Provider value={contextValue}>
  {props.children}
  </ShopContext.Provider>
}

export default ShopContextProvider
