import React, { useEffect, useState } from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import axios from 'axios'

const Videos = ({ direction }) => {
  const [video, setVideo] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get('/videos/random')
      setVideo(res.data)
    }
    fetchVideos()
  }, [])
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='space-evenly' alignItems='start' gap={2}>
      {video.map((video) => {
        <Box>
          <VideoCard key={video._id} video={video} />
        </Box>
      })}
    </Stack>
  )
}

export default Videos