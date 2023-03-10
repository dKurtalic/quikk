import React from 'react'
import { VideoCard, ChannelCard } from './';
import { Box, Stack } from '@mui/system'


const Videos = ({ videos }) => {

    console.log(videos)
    return (
        /*   <Stack direction={{ xs: 'row', sm: 'column' }} justifyContent="start" gap={2}>
             {videos.map((item, index) => (
                   <Box key={index}>
                       {item.id.videoId && <VideoCard video={item} />}
                       {item.id.channelId && <ChannelCard channelDetail={item} />}
                   </Box>
               
               ))}
   
           </Stack>
           */
        <div>ola</div>
    )
}

export default Videos