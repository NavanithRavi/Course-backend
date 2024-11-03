import { useEffect, useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import { Card,TextField,Typography} from '@mui/material';
import CardContent from '@mui/material/CardContent';
function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
//   const[routepage,setRoute]=(false);
//   const handlesubmit=()=>{
//     setEmail('');
//     setPassword('');
//   }
// useEffect(()=>{
//     window.location='/mainpage'
//   },[routepage])
  
  const handleClick= () =>{
    fetch("http://localhost:3001/Login",{
        method:"POST",
        body:JSON.stringify({
            email:email,
            password:password
        }),
        headers: { "Content-Type": "application/json" }
    })
    setEmail('');
    setPassword('');
    const route=()=>{
        window.location="/mainpage"
    }
    route();
    
  }
  return (
    <>
      <div
   style={{
    display: 'flex', // Enable Flexbox layout
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    height: '100vh' // Full viewport height
  }}
>

<Card variant="outlined" style={{ padding: '20px', width: '300px',height:'250px'
}}>
<Typography variant="h6" component="h2"style={{ textAlign: 'center'}}>
  Login
</Typography>

       <TextField id="outlined-basic" label="email" variant="outlined" style={{ marginBottom: '16px',width:'250px' }} onChange={(e)=>setEmail(e.target.value)}value={email}/>
       <br>
       </br>
       <TextField id="outlined-basic" label="password" variant="outlined" style={{ marginBottom: '16px',width:'250px' }}onChange={(e)=>setPassword(e.target.value)}value={password}/>
       <br></br>
       {/* <button type='submit'
       onClick={()=>handleClick()}
       >Signin</button> */}
       <Button variant="contained"
        onClick={()=>handleClick()}>Login</Button>
        </Card>
      </div>
    </>
  )
}

export default Login;
