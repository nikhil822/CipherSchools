import React from 'react'
import { Avatar, TextField, Stack } from '@mui/material'
import Comment from './Comment'

const Comments = () => {
    return (
        <Stack>
            <Stack direction='row' gap={2}>
                <Avatar sx={{ width: '36px', height: '36px' }} src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo' />
                <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Comments"
                    placeholder="Add a comment..."
                    multiline
                    variant="standard"
                    color='primary'
                />
            </Stack>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Stack>
    )
}

export default Comments