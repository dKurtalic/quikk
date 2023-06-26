import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'
import { fetch } from '../utils/fetch'
import { demoChannelUrl, demoVideoUrl, demoVideoTitle } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    const [profilna, setProfilna] = useState(null)

    const channelId = snippet.channelId;

    function formatirajNaslov(tekst) {
        tekst = tekst.replace(/&amp;/g, '&')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&nbsp;/g, ' ')
            .replace(/&reg;/g, '®')
            .replace(/&copy;/g, '©')
            .replace(/&euro;/g, '€')
            .replace(/&bull;/g, '•');
        if (tekst.length > 65) tekst = tekst.slice(0, 65) + '...'
        return tekst;
    }

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
    useEffect(() => {
        postavi();

    }, [videoId]);





    return (
        <Card sx={{ width: '320px', border: '1px solid black', borderRadius: 4, boxShadow: '0px 1px 5px rgba(153,153,153, 1)' }}>
            <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ height: 170, width: 358 }} />
            </Link>
            <CardContent sx={{ height: '100px', backgroundColor: 'black' }}>
                <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                    <Typography variant='subtitle2' fontWeight="bold" sx={{ color: '#fff', fontSize: '16px' }}>
                        {formatirajNaslov(snippet?.title) || demoVideoTitle.slice(0, 60)}
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

/* */