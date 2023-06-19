import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelUrl } from '../utils/constants'
import { Box } from '@mui/system';
import ChannelLogo from './ChannelLogo';


const ChannelCard = ({ channel: { id: { channelId }, snippet }, marginTop }) => {

    return (

        <Box sx={{
            width: { xs: '320px', md: '320px' },
            height: '326px',
            boxShadow: 'none',
            borderRadius: 0,
            display: 'flex',
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '10',
        }}>
            <Link to={channelId ? `/channel/${channelId}` : `/channel/${demoChannelUrl}`}>
                <ChannelLogo id={channelId} snippet={snippet} marginTop={marginTop} />
            </Link>
        </Box>
    )
}

export default ChannelCard