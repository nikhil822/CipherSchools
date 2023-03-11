import React from 'react'
import { Stack, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignIn from './Signin';

const Navbar = () => {
  const logo = 'https://i.ibb.co/s9Qys2j/logo.png'

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#1E1E1E', top: 0, justifyContent: 'space-between' }}
    >
      <Link
        to="/"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img src={logo} alt="logo" height={45} />
        <Typography variant='h5' marginLeft={1}>Video Stream</Typography>
      </Link>
      <SearchBar />
      <Button variant="outlined" color="primary" startIcon={<AccountCircleIcon />} sx={{ borderRadius: "3px" }} onClick={<SignIn />}>
        Sign In
      </Button>
    </Stack>
  )
}

export default Navbar