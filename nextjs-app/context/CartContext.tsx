import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'
import { Cart, CartContextType } from '../@types/Cart'
import { getCookie } from '../cookies';

const cartInit = {
  userId:0,
  skuId:0,
  num:0
}
const CartContext = createContext({cart:cartInit,setCart:()=>{}} as CartContextType)

const CartContextProvider : React.FC<{children:ReactNode}> = ({children}) =>{
  const [cart, setCart] = useState(cartInit)
  
  async function getCart() {    
    try {
      const token = getCookie("token")
      if(!token){
        console.log('no token')
        return  
      }
      const res = await fetch(`http://localhost:3001/cart`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authentication': `Bearer ${token}`
        }
      })      
      const cart = await res.json()
      console.log('cart', cart)
    } catch (error) {
      console.log('error', error)
    }    
   }


   useEffect(() => {
    getCart()
   }, [])
   

  return (
    <CartContext.Provider value={{cart,setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export  {CartContextProvider,CartContext}
