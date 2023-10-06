import { FormEvent, Fragment, useContext, useEffect, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Input,TextField,Box, Grid, ButtonGroup, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { setCookie } from '../cookies';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import styles from "../styles/Cart.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '@/context/CartContext';
import { getCookie } from '../cookies';
import { CartItem } from '@/@types/Cart';

const steps = ['确认购买清单', '填写运送资料', '购物完成'];


async function loginUser(credentials : any) {
  return fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login() {
    const [product, setProduct] = useState({} as any)
    const router = useRouter();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{
      [k: number]: boolean;
    }>({});
    const {cart,patchCart,deleteCart} = useContext(CartContext)
    const totalPrice = useMemo(() => {
      let total = 0
       cart.map(item=>{
        total += (Number(item?.sku?.price) * Number(item?.num))
      })
      return total 
    }, [cart])

    const totalSteps = () => {
      return steps.length;
    };

    const completedSteps = () => {
      return Object.keys(completed).length;
    };

    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };

    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
      setActiveStep(step);
    };

    const handleIncrement = (cartItem:CartItem) => {      
      if( cartItem?.num >= product?.warehouse) return
      // const newCartItem = cartItem
      // newCartItem.num = cartItem?.num + 1
      patchCart(cartItem.id,cartItem?.num + 1)
      // const newCart = cart.filter(item=>item.id !== newCartItem?.id)     
      // const cartSorted = [newCartItem,...newCart].sort((a,b) => a.id - b.id)
      // setCart(cartSorted)
    };
  
    const handleDecrement = (cartItem:CartItem) => {
      console.log('cartItem', !!cartItem.id)      
      if(cartItem?.num <= 0) return      
      // const newCartItem = cartItem
      // newCartItem.num = cartItem?.num - 1
      patchCart(cartItem.id,cartItem?.num - 1)
      // const cartSorted = [newCartItem, ...newCart].sort((a,b) => a.id - b.id)
      // setCart(cartSorted)
    };

    async function getProduct(id=0) {
      try {
        const token = getCookie("token")
        if(!token){
          console.log('no token')
          return  
        }
        const res = await fetch(`http://localhost:3001/sku/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })      
        const product = (await res.json())[0]

        setProduct(product)     
      } catch (error) {
        console.log('error', error)
      }    
     }

  useEffect(() => {    
    if(cart?.length > 0){
      // getProduct()
    }
  }, [cart])

  async function deleteFromCart(id:number){
    try {
      deleteCart(id)
    } catch (error) {
      console.log('error', error)
    }    
  }

  function goHome() {
    router.push('/home')
  }
  

  return(
    <div >
      <Container maxWidth="sm">
        <Box sx={{ width: '100%' }} className={styles.cart}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <Container maxWidth="xs"  >
            {cart?.length > 0 ? (
              <Box sx={{ width: '100%' }}>
                {cart?.map(
                  item=>{
                    return (
                      
                        <Grid container spacing={2} key={item?.id}>
                          <Grid item xs={2}>
                            <img src={item?.sku?.image} alt="img" width={100}/>
                          </Grid>
                          <Grid item xs={8}>
                            <h5>{item?.sku?.title}</h5>
                            <p>
                              <span className={styles['org-price']}>
                                {item?.sku?.org_price}
                              </span>
                              <span>
                                {item?.sku?.price}
                              </span>
                              <span>
                                --
                                {item?.sku?.price * item?.num}
                              </span>
                            </p>
                          </Grid>
                          <Grid item xs={2}>
                            <span onClick={() => {
                              deleteFromCart(item.id)
                            }}>x</span>
                            <ButtonGroup size="small" aria-label="small outlined button group">
                              {<Button variant="contained" disabled={item?.num <= 1 } onClick={()=>{
                                handleDecrement(item)
                              }}>-</Button>}
                              {<Button disabled={item?.num === 1 || item?.num >= product?.warehouse?.num}>{item?.num}</Button>}
                              <Button  variant="contained" disabled={item?.num >= product?.warehouse?.num } onClick={()=>{
                                handleIncrement(item)
                              }}>+</Button>                    
                            </ButtonGroup>
                          </Grid>
                        </Grid>
                      
                    )
                  }
                )}

                <Stack>
                  <div>
                    <b>统计</b>
                    <span>
                      ¥{totalPrice}
                    </span>
                  </div>
                  <Button variant="contained" className="add-cart" fullWidth>
                    <ShoppingCartIcon/>
                    去选购
                  </Button>
                </Stack>
              </Box>
            ):(
              <Box sx={{ width: '100%' }}>
                <p>购物车尚无商品，赶快去选购吧</p>
                <Button variant="contained" className="add-cart" fullWidth onClick={goHome}>
                  <ShoppingCartIcon/>
                  去选购
                </Button>
              </Box>
            )}
            
          </Container>
        </Box>
      </Container>
    </div>
  )
}

