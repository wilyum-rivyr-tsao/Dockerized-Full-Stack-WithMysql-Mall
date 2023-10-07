import { FormEvent, useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Input,TextField,Box } from '@mui/material';
import { useRouter } from 'next/router';
import { setCookie } from '../cookies';
import {CartContext} from '../context/CartContext'


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
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {getCart}  = useContext(CartContext)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    try {
        const res = await loginUser({
          email:username,
          password
        });
        if (res.access_token) {
            // Save the token to a cookie
            setCookie('token', res.access_token);
            setCookie('user',JSON.stringify(res.user))
            await getCart()
           // Redirect to the dashboard or protected page
           router.push('/home');
           } else {
           console.error('Login failed');
           // Handle error and display appropriate message
        }
    } catch (error) {
    console.error('Error occurred during login:', error);
    // Handle error and display appropriate message
    }
  }


  return(
    <div >
      <Container maxWidth="sm" style={{width:"300px"}}>
      <h1>Please Log In</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
          <TextField          
          id="standard-disabled"
          label="email"
          defaultValue=""
          variant="standard" 
          onChange={e => setUserName(e.target.value)}
          fullWidth
        />
                     
          <TextField id="standard-basic" type="password" label="Password" variant="standard"  onChange={e => setPassword(e.target.value)} fullWidth />
        
        
          <Button type="submit" variant="contained">Submit</Button>
        
        </Box>
      </Container>
    </div>
  )
}

