import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'

const Videos = ({direction}) => {
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='space-evenly' alignItems='start' gap={2}>
      <Box>
        <VideoCard />
      </Box>
      <Box>
        <VideoCard />
      </Box>
      <Box>
        <VideoCard />
      </Box>
      
    </Stack>
  )
}

export default Videos