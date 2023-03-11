import React from 'react'
import { useState } from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/icons'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    
    const handleDrawerClose = () => {
        setIsMenuOpen(false)
    }
    return (
    <Stack
      direction='row'
      sx={{
        overflow: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}
    >
      {categories.map((category) => (
        <button className='category-btn'>
          <span style={{color: 'white', marginRight: '15px'}}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
    )
}

export default Menu