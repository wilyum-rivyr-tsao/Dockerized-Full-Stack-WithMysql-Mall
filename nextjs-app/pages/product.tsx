import { FormEvent, useState,useEffect,useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Breadcrumbs, ButtonGroup, FormControl, Input,InputLabel,Link,MenuItem,Select,SelectChangeEvent,Stack,TextField, Typography,Icon, Divider, Grid } from '@mui/material';
import { getCookie } from '../cookies';
import { useRouter } from 'next/router';
import styles from '../styles/Product.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '@/context/CartContext';

export default function Home() {
  const router = useRouter();
  const [id, setId] = useState(0)
  const [code, setcode] = useState(0)
  const [product, setProduct] = useState({} as any)
  const [properties, setProperties] = useState({
    RAM:[{id:0,name:'',value:''}],
    storage:[{id:0,name:'',value:''}]
  })
  const [goods, setgoods] = useState([])
  const [brand, setBrand] = useState({} as any)
  const [order, setOrder] = useState('');
  const [counter, setcounter] = useState(0)
  const [property, setProperty] = useState({
    RAM:'',
    storage:''
  })
  const [tagProduct, setTagProduct] = useState([] as any)
  const {cart,setCart} = useContext(CartContext)

  useEffect(() => {
    const id = (router?.query?.id ?? 0) as number
    if (id) {
      setId(id)
      getProduct(id)      
    }
    
    // setCart(
    //   {
    //     userId:1,
    //     skuId:2,
    //     num:10
    //   }
    // )
  }, [router])

  useEffect(() => {
    if(product){
      const ram = product?.properties?.find(((item:any)=>item.name === 'RAM'))?.id
      const storage = product?.properties?.find(((item:any)=>item.name === 'storage'))?.id
      setProperty({
        RAM:ram,
        storage
      })
    }
  }, [product])
  


  async function getProperties(id=0) {
    try {
      const token = getCookie("token")
      if(!token){
        return  
      }
      const res = await fetch(`http://localhost:3001/property/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authentication': `Bearer ${token}`
        }
      })
      const properties = await res.json()

      let storage = properties.filter((value:any) => {        
        return value.name === 'storage'
      })

      let ram = properties.filter((value:any) => {        
        return value.name === 'RAM'
      })

      setProperties({
        'RAM':ram,
        'storage':storage
      })
    } catch (error) {
      console.log('error', error)
    }    
   }
  
  async function getProduct(id=0) {
    
    try {
      const token = getCookie("token")
      if(!token){
        console.log('no token')
        return  
      }
      const res = await fetch(`http://localhost:3001/sku/${id}/code/${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authentication': `Bearer ${token}`
        }
      })      
      const product = (await res.json())[0]
      await getProperties(product?.spu?.id)
      setProduct(product)    

      await getProductByTagIds(product.tags.map((item:any)=>item.id))
        
    } catch (error) {
      console.log('error', error)
    }    
   }

   async function getProductByTagIds(tagId:Array<number>) {
    try {
      const token = getCookie("token")
      if(!token){
        console.log('no token')
        return  
      }
      const tags = tagId.join(',')
      console.log('tags', tags)
      const res = await fetch(`http://localhost:3001/sku/tags/${tags}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authentication': `Bearer ${token}`
        }
      })      
      const tagProduct = (await res.json())
      console.log('tagProduct', tagProduct)
      setTagProduct(tagProduct)
    } catch (
    error) {
      
    }
   }




  const handleIncrement = () => {
    counter >= product?.wareh
    setcounter(counter+1)
  };

  const handleDecrement = () => {
    if(counter < 0) return
    setcounter(counter-1)
  };
  
  const handleChange = (event: SelectChangeEvent,type:string) => {
    setProperty({...property,[type]:event.target.value as string})
    console.log('properties', property)
  };

  return(
    <div>
      <Container>        
        <Grid container spacing={2}>
          <Grid md={6} xs={12} item>
            <img src={product?.image} alt="product" className={`${styles['product-image']} ${styles['product-image-head']}`}/>
          </Grid>
          <Grid md={6} xs={12} item>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                首页
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href={`/home?id=${id}`}
              >
                {product?.spu?.brand?.name}
              </Link>
              <Typography color="text.primary">{product?.title}</Typography>
            </Breadcrumbs>
            <Stack>
              <h3>{product?.title}</h3>
              <span>
                {product?.code?.replaceAll(',', '')}
              </span>
              <div>
                Brand 品牌 | 
                <span>
                  {' ' + product?.spu?.brand?.name}
                </span>
              </div>
              <h4 className={styles['product-desc-tit']}>| 产品介绍 | </h4>
              <ul className={styles['product-desc']}>
                {
                  product?.decs?.map((item:string,index:number) => {
                    return (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  })
                }
              </ul>
              <div>
                <span>预计出货日 ｜ </span>
                <span>
                  {product?.warehouse?.delivery_date}
                </span>
                <span>天</span>
              </div>

              <div className='disabled-text'>
                {product?.org_price}
              </div>

                <div className={styles['properties']}>
                  <InputLabel id="demo-simple-select-label">RAM</InputLabel>
                  
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={property.RAM}
                    label="RAM"
                    onChange={(e)=>handleChange(e,'RAM')}
                    fullWidth                      
                  >
                    {properties?.RAM?.map((item=>{
                      return (<MenuItem value={item.id} key={item.id}>{item.value}</MenuItem>)
                    }))}
                  </Select>
                </div>

                <div className={styles['properties']}>
                  <InputLabel id="demo-simple-select-label-2">内存</InputLabel>
                  <Select
                    labelId="demo-simple-select-label-2"
                    id="demo-simple-select-2"
                    value={property.storage}
                    label="Storage"
                    onChange={(e)=>handleChange(e,'storage')}
                    fullWidth
                  >
                    {properties?.storage?.map((item=>{
                      return (<MenuItem value={item.id} key={item.id}>{item.value}</MenuItem>)
                    }))}
                  </Select>
                </div>
              
              <div className='counter'>
                <div className='counter-price'>{product?.price}</div>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  {<Button variant="contained" disabled={counter <= 0 } onClick={handleDecrement}>-</Button>}
                  {<Button disabled={counter === 0 || counter >= product.warehouse.num}>{counter}</Button>}
                  <Button  variant="contained" disabled={counter >= product?.warehouse?.num } onClick={handleIncrement}>+</Button>                    
                </ButtonGroup>
              </div>
              <Button variant="contained" className="add-cart">
                <ShoppingCartIcon/>
                加入购物车
              </Button>
              <div className='tags'>
                {
                  product?.tags?.map((tag:{id:number,value:string},index:number)=> {
                    return (
                      <span key={index}>
                        #{tag?.value}
                      </span>
                    )
                  })
                }
              </div>
            </Stack>
            <Stack className={styles['product-desc']}>
              <h3 className={styles['tit']}>
                商品简介
              </h3>
              <Divider className={styles['divider']} />      
              <div dangerouslySetInnerHTML={{ __html: product.product_desc }} />      
            </Stack>
          </Grid>
        </Grid>  
        <Grid container className={styles['pro-imgs']} spacing={2}>
          <Grid xs={12} md={6} item>
              <div>
              {product?.images && product?.images?.map((img:string, index:number)=>{
                return (
                  <img src={img} key={index} alt="" className={styles['product-image']}/>
                )
              })}
            </div>   
          </Grid>
        </Grid>
        <Grid container spacing={2} className={styles['tag-products']}>
          {
            tagProduct?.map((item:any)=>{
              return(
                <Grid item key={item.id} md={2} xs={3} onClick={()=>{
                  router.push('/product?id=' + item.id)
                }}>
                  <Stack>
                    <img src={item.image} alt="image" style={{width:'100%',height:"180px"}}/>                      
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