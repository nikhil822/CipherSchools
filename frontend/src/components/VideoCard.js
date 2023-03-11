import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Avatar } from '@mui/material'

const VideoCard = () => {
    return (
        <Link to='/video/test' style={{textDecoration:'none'}}>
            <Card style={{width:'360px', marginBottom:'45px', cursor:'pointer', display:'block', gap:'10px'}}>
                <CardMedia
                    style={{height:'202px', flex:1}}
                    image='https://images.unsplash.com/photo-1678446759426-2e1a8f3c7c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                />
                <CardContent>
                    <div style={{display:'flex', justifyContent:'space between'}}>
                        <Avatar style={{ width: '36px', height: '36px', borderRadius: '50%'}} src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo' />
                        
                        <Typography style={{ fontSize: '16px', fontWeight: '500', marginLeft: '15px' }}>Test Video</Typography>
                        </div>
                    <Typography style={{ fontSize: '14px', margin:'9px 0px' }}>Channel Name</Typography>
                    <Typography style={{ fontSize: '14px', color:'#999' }}>views | 1 day ago</Typography>
                </CardContent>
                
                </Card>
            </Link>
    )
}

export default VideoCard