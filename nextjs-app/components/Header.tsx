import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import {CartContext}  from '@/context/CartContext';
import { removeCookie } from '../cookies';
import { useRouter } from 'next/router';

export default function Header() {
  const {cart} = useContext(CartContext)
  const [count, setCount] = useState(0)
  const router = useRouter();

  useEffect(() => {    
    let count = 0
    cart.map(item=>{
      count+=item.num
    })
    setCount(count)
  }, [cart])

  function logout() {
    removeCookie('token')
    removeCookie('user')
    router.push('/login')
  }
  
  function gotoCart(){
    router.push('/cart')
  }
  return(
    <div className='header'>
        <Button variant="contained" color="primary" onClick={logout} style={{marginTop:"-6px",float:"right",marginRight:"5px"}}>
          logout
        </Button>
        <Badge badgeContent={count} color="error" className='g-cart' onClick={gotoCart}>
            <ShoppingCartIcon/>
        </Badge>
      </div>
  )
}