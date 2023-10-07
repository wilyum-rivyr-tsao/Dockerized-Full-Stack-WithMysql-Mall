import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'
import { Cart, CartContextType } from '../@types/Cart'
import { getCookie } from '../cookies';

const cartInit:Cart = [{
  id:0,
  userId:0,
  skuId:0,
  num:0,
  sku:{}
}]
const CartContext = createContext({cart:cartInit,setCart:()=>{},getCart:()=>{}, patchCart:()=>{},deleteCart:()=>{}} as CartContextType)

const CartContextProvider : React.FC<{children:ReactNode}> = ({children}) =>{
  const [cart, setCart] = useState(cartInit)
  
  async function getCart() {
    try {
      const token = getCookie("token")
      if(!token){
        console.log('no token')
        return  
      }      
      
      const res = await fetch(`http://localhost:3001/cart/getByUserId`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })      
      const cart = await res.json()
      // console.log('cart context', cart)
      setCart(cart as Cart)
      // console.log('cart', cart)
    } catch (error) {
      console.log('error', error)
    }    
  }

   const patchCart = async (id:number,counter:number) => {
    try {
      const token = getCookie("token")
      if(!token){
        console.log('no token')
        return  
      }
      
      const res = await fetch(`http://localhost:3001/cart/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({num:counter})
      })      
      const cartRes = (await res.json())
      getCart()      
    } catch (
    error) {}
  }

  const deleteCart = async (id:number) => {
    try {
      const token = getCookie("token")
      if(!token){
        console.log('no token')
        return  
      }
      
      const res = await fetch(`http://localhost:3001/cart/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }        
      })      
      const cartRes = (await res.json())
      getCart()      
    } catch (
    error) {}
  }


   useEffect(() => {
    getCart()
    console.log('getcart')
   }, [])
   

  return (
    <CartContext.Provider value={{cart,setCart,getCart,patchCart,deleteCart}}>
      {children}
    </CartContext.Provider>
  )
}

export  {CartContextProvider,CartContext}
