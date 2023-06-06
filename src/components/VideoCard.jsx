import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'
import { fetch } from '../utils/fetch'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'
import ChannelCard from './ChannelCard';
import ChannelLogo from './ChannelLogo'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {


    const [videoDetails, setVideoDetails] = useState(null);
    const [mojId, setMojId] = useState(null);
    const [profilna, setProfilna] = useState(null)

    const channelId = snippet.channelId;
    useEffect(() => {
        postavi();

    }, [videoId]);


    async function postavi() {
        /*   await fetch(`videos?id=${videoId}&part=snippet`).then((data) => {
               setVideoDetails(data?.items[0]);
               setMojId(data?.items[0]?.statistics?.viewCount);
           });
   */
        await fetch(`channels?id=${channelId}&part=snippet`).then((data) => {
            setProfilna(data?.items[0]);
        });
    }


    return (
        <Card sx={{ width: '320px', boxShadow: 'none', border: '1px solid black', borderRadius: 4, boxShadow: '0px 2px 4px rgba(153,153,153, 1)' }}>
            <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ height: 170, width: 358 }} />
            </Link>
            <CardContent sx={{ overflowX: 'auto', height: '95px', backgroundColor: 'black' }}>
                <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                    <Typography variant='subtitle2' fontWeight="bold" sx={{ color: '#fff', fontSize: '16px' }}>
                        {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>




                <div className='horizontala'>
                    <Link to={channelId ? `/channel/${channelId}` : `/channel/${demoChannelUrl}`}>
                        <img
                            src={profilna?.snippet?.thumbnails?.high?.url}
                            alt={profilna?.snippet?.title}
                            style={{ height: '25px', width: '25px', borderRadius: '50%', marginRight: '10px', marginTop: '10px' }}
                        />
                    </Link>
                    <div sx={{ alignItems: 'center' }}>
                        <Typography variant='h6' fontWeight='bold' sx={{ color: '#a9a9a9', fontSize: '13px', alignItems: 'center' }}>
                            {profilna?.snippet?.title}
                            <CheckCircleIcon sx={{ color: 'a9a9a9', fontSize: '16px', paddingLeft: '5px', paddingTop: '10px' }} />
                        </Typography>
                    </div>
                </div>

            </CardContent>

        </Card >
    )
}

export default VideoCard