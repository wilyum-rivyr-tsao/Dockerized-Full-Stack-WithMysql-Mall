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
  const [counter, setcounter] = useState(1)
  const [property, setProperty] = useState({
    RAM:'',
    storage:''
  })
  const [tagProduct, setTagProduct] = useState([] as any)
  const {cart,setCart,getCart} = useContext(CartContext)

  useEffect(() => {
    const id = (router?.query?.id ?? 0) as number
    if (id) {
      setId(id)
      getProduct(id)      
    }
    
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
          'Authorization': `Bearer ${token}`
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
  
  async function getProduct(id:number) {    
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

      await getProperties(product?.spu?.id)      
      setProduct(product)
      await getProductByTagIds(product.tags.map((item:any)=>item.id))
        
    } catch (error) {
      console.log('error', error)
    }    
   }

   async function getProductByCode(code?:string[]) {    
    try {
      const token = getCookie("token")
      if(!token){
        console.log('no token')
        return  
      }
      const res = await fetch(`http://localhost:3001/sku/code/${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })      
      const product = (await res.json())[0]
      console.log('code product', product)
      router.push(`product?id=${product.id}`)
      
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
          'Authorization': `Bearer ${token}`
        }
      })      
      const tagProduct = (await res.json())      
      setTagProduct(tagProduct)
    } catch (
    error) {
      
    }
   }




  const handleIncrement = () => {    
    setcounter(counter+1)
  };

  const handleDecrement = () => {    
    setcounter(counter-1)
  };
  
  const handleChange = (event: SelectChangeEvent,type:string) => {
    const newProperty = {...property,[type]:event.target.value as string}
    setProperty(newProperty)
    // console.log('property', property)
    // console.log('product.properties', product?.properties)
    if(newProperty.RAM !== ""){
      let code = product?.properties?.filter((item:any)=>{
        if(item.name !== Object.keys(newProperty)[0] && item.name !== Object.keys(newProperty)[1]){
          return item.id
        }  
      }).map((x:any)=>x.id)
      // console.log('newProperty', newProperty)
      code = [...code,...Object.values(newProperty)]
      // console.log('code--', Object.values(newProperty))

      getProductByCode(code)
    }
  };

  const addCart = async () => {
    try {
      const token = getCookie("token")
      if(!token){
        console.log('no token')
        return  
      }
      const user = JSON.parse(getCookie("user") ?? "")

      const cartItem = cart.find(item => {        
        return Number(item.skuId) === Number(id) && Number(item.userId) === Number(user.id)
      })
      console.log('cartItem', cartItem)
      
      if(cartItem?.id){
        const res = await fetch(`http://localhost:3001/cart/${cartItem?.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body:JSON.stringify({num:cartItem?.num + counter})
        })      
        const cartRes = (await res.json())

      }else{
        const res = await fetch(`http://localhost:3001/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body:JSON.stringify({skuId:id,num:counter})
        })      
        const cartRes = (await res.json())
      }

      getCart()
      // setCart(cart)
    } catch (
    error) {
      
    }
  }

  return(
    <div>
      <Container className='mt-10'>        
        <Grid container spacing={2}>
          <Grid md={6} xs={12} item>
            <img src={product?.image} alt="product" className={`${styles['product-image']} ${styles['product-image-head']}`}/>
          </Grid>
          <Grid md={6} xs={12} item>
            <Breadcrumbs aria-label="breadcrumb" className='text-[#322c87]'>
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
              <h3  className='mb-0 text-2xl'>{product?.title}</h3>
              <span className='text-gray-400'>
                {product?.code?.replaceAll(',', '')}
              </span>
              <div className='text-[#322c87] mt-10 font-bold'>
                Brand 品牌 | 
                <span>
                  {' ' + product?.spu?.brand?.name}
                </span>
              </div>
              <h4 className={styles['product-desc-tit']+" text-gray-400"}>| 产品介绍 | </h4>
              <ul className={styles['product-desc']+" text-gray-400"}>
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
              <div className='mt-5 mb-5 text-gray-400'>
                <span>预计出货日 ｜ </span>
                <span>
                  {product?.warehouse?.delivery_date}
                </span>
                <span>天</span>
              </div>

              <div className='mt-5'>
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
              </div>
              
              <div className='mt-6 disabled-text'>
                {product?.org_price}
              </div>
              <div className='counter'>                
                <div className='text-3xl counter-price text-[#322c87] font-bold'>{product?.price}</div>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  {<Button variant="contained" disabled={counter <= 1 } onClick={handleDecrement}>-</Button>}
                  {<Button disabled={counter === 1 || counter >= product.warehouse?.num}>{counter}</Button>}
                  <Button  variant="contained" disabled={counter >= product?.warehouse?.num } onClick={handleIncrement}>+</Button>                    
                </ButtonGroup>
              </div>
              <Button variant="contained" className="w-full add-cart" onClick={addCart} disabled={counter <= 0 || counter >= product?.warehouse?.num}>
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
              <div dangerouslySetInnerHTML={{ __html: product?.product_desc }} />      
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