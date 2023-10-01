import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext, useEffect } from 'react';
import {CartContext}  from '@/context/CartContext';
export default function Header() {
  const {cart} = useContext(CartContext)

  useEffect(() => {    
    console.log('cart', cart)
  }, [cart])
  
  return(
    <div className='header'>
        <Badge badgeContent={cart.num} color="error" className='g-cart'>
            <ShoppingCartIcon/>
        </Badge>
      </div>
  )
}