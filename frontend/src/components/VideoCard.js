import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Avatar } from '@mui/material'
import {format} from 'timeago.js'

const VideoCard = ({video}) => {
    return (
        <Link to='/video/test' style={{textDecoration:'none'}}>
            <Card sx={{width: {xs: '100%', sm:'358px', md:'320px'}}}>
                <CardMedia
                    sx={{width: {xs: '100%', sm:'358px'}, height:'180px'}}
                    image={video.imageUrl}
                />
                <CardContent sx={{backgroundColor:'#1E1E1E', height:'106px'}}>
                    <div style={{display:'flex', justifyContent:'space between'}}>
                        <Avatar style={{ width: '36px', height: '36px', borderRadius: '50%'}} />
                        
                        <Typography style={{ fontSize: '16px', fontWeight: '500', marginLeft: '15px', color: '#FFF' }}>{ video.title }</Typography>
                    </div>
                    <Typography style={{ fontSize: '14px', margin:'9px 0px', color:'#FFF' }}>Channel Name</Typography>
                    <Typography style={{ fontSize: '14px', color: '#999' }}>{ video.views } views | 1 day ago</Typography>
                </CardContent>
                
                </Card>
            </Link>
    )
}

export default VideoCard