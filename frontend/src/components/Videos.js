import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'

const Videos = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
  )
}

export default Videos