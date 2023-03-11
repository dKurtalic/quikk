import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";
import { green } from "@mui/material/colors";

const Videos = ({ videos, direction }) => {
    console.log("Videi ");
    console.log(videos)
    if (videos !== null && videos[0] !== null) {
        console.log("prosao")
        return (
            <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
                {videos[0].map((item, idx) => (
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item}></VideoCard>}
                        {item.id.channelId && <ChannelCard video={item}></ChannelCard>}
                    </Box>
                ))}
            </Stack>
        );
    } else {
        return (
            <div>jbg</div>
        )
    }

}

export default Videos;
