import { FormEvent, useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { FormControl, Input,InputLabel,MenuItem,Select,SelectChangeEvent,Stack,TextField } from '@mui/material';
import { getCookie } from '../cookies';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Home() {
  const router = useRouter();

  async function getGoods(order="asc",brandId=3) {
    try {
      const token = getCookie("token")
      if(!token){
        return  
      }
      const res = await fetch(`http://localhost:3001/brand/${brandId}/order/${order}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authentication': `Bearer ${token}`
        }
      })
      const brand = await res.json()
      setBrand(brand)
      setgoods(brand.spu[0].sku)
    } catch (error) {
      console.log('error', error)
    }    
   }

  useEffect(() => {
    getGoods()
  }, [])


  const [goods, setgoods] = useState([])
  const [brand, setBrand] = useState({} as any)

  const [order, setOrder] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const order = event.target.value
    setOrder(order)
    getGoods(order)
  };
  


  return(
    <div>
      <img src="https://img.adtiming.com/u/web/www/images/case-studies/xiaomi/xiaomi-case-study-banner.jpg" alt="banner" style={{width:"100%"}} />
      <Container >
      <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small-label">按价格排序</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={order}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="desc">多到少</MenuItem>
        <MenuItem value="asc">少到多</MenuItem>
      </Select>
    </FormControl>
        <Grid container spacing={2}>
          {
            goods.map((item:any) => {
              return (
                <Grid item xs={6} md={3} key={item.id} className={styles.goods} onClick={()=>{
                  router.push('/product?id=' + item.id)
                }}>
                  <Stack>
                    <img src={item.image} alt="image" style={{width:'100%',height:"250px"}}/>                      
                    <span>
                      {item.title}
                      
                    </span>
                    <span className={styles['brand-name']}>
                      ${brand.name}
                    </span>
                    <p>
                      <b>{item.price}</b>
                      <span className={styles['org-price']}>${item.org_price}</span>
                    </p>
                  </Stack>
                </Grid>
              )
            })
          }
          
      </Grid>
      </Container>
    </div>
  )
}

