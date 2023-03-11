import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player'

const VideoDetail = () => {
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{width: '100%', position:'sticky', top:'86px'}}>
            <ReactPlayer url='https://www.youtube.com/watch?v=FHTbsZEJspU&t=3043s' className='react-player' controls />
            <Typography variant='h5' color="#fff" p={2}>Title of the video</Typography>
            <Stack>
              
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail