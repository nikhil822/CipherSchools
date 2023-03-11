// import React, { useState } from 'react'
// import { Box, Button, TextField, Typography } from '@mui/material'

// const Signin = () => {
//     const [isSignup, setIsSignup] = useState(false)
//     console.log(isSignup)
//     return (
//         <div>
//             <form>
//                 <Box display='flex' flexDirection='column' maxWidth={400} alignItems='center' justifyContent='center' margin='auto' marginTop={5} padding={3} borderRadius={5} boxShadow='5px 5px 10px #ccc' sx={{
//                     ':hover': {
//                         boxShadow: '10px 10px 20px #ccc'
                        
//                 }, backgroundColor:'#191C22', color:'#FFF'}}>
//                     <Typography variant='h2' padding={3} textAlign='center'>
//                     {!isSignup ? 'Login' : 'Signup'}
//                     </Typography>

//                     {isSignup && (<TextField margin='normal' type={'text'} variant='outlined' placeholder='Name' color='#FFF' />)}
//                     <TextField margin='normal' type={'email'} variant='outlined' placeholder='Email' />
//                     <TextField margin='normal' type={'password'} variant='outlined' placeholder='Password' />

//                     <Button onClick={() => setIsSignup(!isSignup)} variant='contained' color='primary' sx={{ marginTop: 3, borderRadius: 3 }}>
//                     {!isSignup ? 'Login' : 'Signup'}
//                     </Button>
                    
//                     <Button onClick={() => setIsSignup(!isSignup)} sx={{ marginTop: 3, borderRadius: 3 }}>
//                         Change to {isSignup ? 'Login' : 'Signup'}
//                     </Button>
//                 </Box>
//             </form>
//         </div>
//     )
// }

// export default Signin

import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const SignIn = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 56px)",
        color: '#fff',
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: '#191C22',
          border: '1px solid grey[300]',
          padding: "20px 50px",
          gap: "10px",
        }}
      >
        <Typography variant="h4">Sign in</Typography>
        <Typography variant="h5" fontWeight={300}>
          to continue to LamaTube
        </Typography>
        <TextField placeholder="Username" variant="outlined" sx={{input: { color: '#fff' }}} />
        <TextField
          placeholder="Password"
          type="password"
                  variant="outlined"
                  sx={{input: { color: '#fff' }}}
        />
        <Button variant="contained" sx={{ fontWeight: 500 }}>
          Sign in
        </Button>
        <Typography variant="h4">or</Typography>
        <TextField placeholder="username" variant="outlined" sx={{input: { color: '#fff' }}} />
        <TextField placeholder="email" variant="outlined" sx={{input: { color: '#fff' }}} />
        <TextField
          placeholder="password"
          type="password"
                  variant="outlined"
                  sx={{input: { color: '#fff' }}}
        />
        <Button variant="contained" sx={{ fontWeight: 500, color:'#191C22' }}>
          Sign up
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
