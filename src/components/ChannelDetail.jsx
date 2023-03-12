import { Box } from '@mui/material';
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { fetch } from '../utils/fetch'
import ChannelCard from './ChannelCard';

const ChannelDetail = () => {

    const { id } = useParams();
    const [channel, setChannel] = useState(null)
    const [channelDetails, setChannelDetails] = useState(null)

    const [videos, setVideos] = useState(null)
    const [naslovna, setNaslovna] = useState(null)
    const [profilna, setProfilna] = useState(null)
    const nemaNaslovne = "background: linear-gradient(90deg, rgba(223,41,10,1) 0%, rgba(121,9,9,1) 35%, rgba(0,0,0,1) 100%);"
    console.log("ola ");
    console.log(channel);

    useEffect(() => {
        fetch(`channels?id=${id}&part=snippet`).then((data) => {
            setChannel(data?.items[0]);
            setChannelDetails(data?.items[0]);
            setNaslovna(data?.items[0].brandingSettings?.image?.bannerExternalUrl);
            setProfilna(data?.items[0].snippet?.thumbnails?.high?.url);
        })
        fetch(`search?channelId=${id}&part=snippet&order=date`).then((data) => { setVideos(data?.items); })
    }, [id])

    return (
        <Box minHeight='95vh' >
            <Box>
                <div style={{
                    position: 'sticky', height: '300px', backgroundColor: 'red',
                    backgroundImage: `url(${naslovna ? naslovna : nemaNaslovne})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
            </Box>
            <Box display='flex' justifyContent='center'>
                <ChannelCard channel={channel} />

            </Box>
        </Box>
    )
}

export default ChannelDetail