import React from 'react'
import { Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const logo = 'https://i.ibb.co/s9Qys2j/logo.png'

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >
      <Link
        to="/"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar />
      <Button variant="outlined" color="primary" startIcon={<AccountCircleIcon />} sx={{ borderRadius: "3px" }}>
        Sign In
      </Button>
    </Stack>
  )
}

export default Navbar