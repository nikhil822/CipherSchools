import React from 'react'
import { Stack, Box, Typography, Avatar, Button } from '@mui/material'
import ReactPlayer from 'react-player'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Videos from './Videos';
import Comments from './Comments';

const VideoDetail = () => {
  return (
    <Box minHeight='90vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{width: '100%', position:'sticky', top:'86px'}}>
            <ReactPlayer url='https://www.youtube.com/watch?v=FHTbsZEJspU&t=3043s' className='react-player' controls />
            <Typography variant='h5' color="#fff" p={2}>Title of the video</Typography>
            <Stack direction='row' justifyContent='space-between'>
              <div style={{display:'flex', justifyContent:'space between'}}>
                <Avatar style={{ width: '36px', height: '36px', borderRadius: '50%'}} src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo' />
                          
                <Typography style={{ fontSize: '16px', fontWeight: '500', marginLeft: '15px', color: '#fff' }}>Subscriber
                  <CheckCircleIcon sx={{ fontSize: '16px', color: 'gray', marginLeft:'5px' }} />
                </Typography>
              </div>
              <Stack direction='row' spacing={2}>
                <Button variant='text' startIcon={<ThumbUpOutlinedIcon />}>
                  15
                </Button>
                <Button variant='text' startIcon={<ThumbDownOutlinedIcon />}>
                  15
                </Button>
                <Button variant='outlined' startIcon={<ShareOutlinedIcon />}>
                  Share
                </Button>
              </Stack>
            </Stack>
            <Stack direction='row' gap='20px' alignItems='center' color='white' margin='20px'>
              <Typography variant='body1' sx={{opacity: 0.7}}>
                453 Views
              </Typography>
              <Typography variant='body1' sx={{opacity: 0.7}}>
                Date
              </Typography>
            </Stack>
            <Comments />
          </Box>
        </Box>
      <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
        <Videos direction='column' />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
