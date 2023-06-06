import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Videos from './Videos'
import { fetch } from '../utils/fetch'
import ChannelCard from './ChannelCard';
import ChannelLogo from './ChannelLogo';

const ChannelDetail = () => {

    const { id } = useParams();
    const [channel, setChannel] = useState()
    const [channelDetails, setChannelDetails] = useState(null)

    const [videos, setVideos] = useState(null)
    const [naslovna, setNaslovna] = useState(null)
    const [profilna, setProfilna] = useState(null)
    const nemaNaslovne = "background: linear-gradient(90deg, rgba(223,41,10,1) 0%, rgba(121,9,9,1) 35%, rgba(0,0,0,1) 100%);"


    useEffect(() => {
        postavi();

    }, [id]);

    async function postavi() {
        await fetch(`channels?id=${id}&part=snippet`).then((data) => {
            setChannel(data?.items[0]);
            setChannelDetails(data?.items[0]);

            setNaslovna(data?.items[0].brandingSettings?.image?.bannerExternalUrl);
            setProfilna(data?.items[0].snippet?.thumbnails?.high?.url);
        })
        await fetch(`search?channelId=${id}&maxResults=50&part=snippet&order=date`).then((data) => {
            setVideos(data?.items);
        })

    }
    console.log("Channel details " + JSON.stringify(channelDetails));
    console.log("Naslovna je : " + naslovna);

    return (
        <Box minHeight="95vh" margin='0'>
            <Box margin='0'>
                <div style={{
                    position: 'sticky', height: '300px', backgroundColor: 'red',
                    backgroundImage: `url(${naslovna})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />

                {channel ? (
                    <Box display='flex' justifyContent='center'>
                        <ChannelLogo id={id} snippet={channelDetails?.snippet} marginTop="-90px" />
                    </Box>
                ) : (
                    <Box>Loading...</Box>
                )}
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                <Typography variant='subtitle1' sx={{ color: 'white' }} >{channelDetails?.statistics?.subscriberCount} subscribers</Typography>
            </Box>
            <Box display='flex' p='2' margin='0'>
                <Box sx={{ mr: { sm: '100px' } }} />
                {videos ? (
                    <Videos videos={videos} />
                ) : (
                    <Box>Loading...</Box>
                )}

            </Box>
        </Box >

    )
}

export default ChannelDetail