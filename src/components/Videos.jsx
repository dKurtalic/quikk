import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {

    if (videos !== null && videos[0] !== null) {
        return (
            <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} margin='0' height='100%' backgroundColor='black'>
                {videos.map((item, idx) => (
                    <Box margin='0' key={idx}>
                        {item?.id?.videoId && <VideoCard video={item}></VideoCard>}
                        {item?.id?.channelId && <ChannelCard channel={item}></ChannelCard>}
                    </Box>
                ))}
            </Stack>
        );
    } else {
        return (
            <div></div>
        )
    }

}

export default Videos;