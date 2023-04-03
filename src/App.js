import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, SearchFeed, VideoDetail, ChannelDetail, Feed } from './components';

function App() {
    return (
        <Box backgroundColor='black'>
            <BrowserRouter>
                <Box height='140vh' sx={{ backgroundColor: 'black' }} >
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Feed />} />
                        <Route path="/video/:id" element={<VideoDetail />} />
                        <Route path="/search/:searchQuery" element={<SearchFeed />} />
                        <Route path="/channel/:id" element={<ChannelDetail />} />
                    </Routes>
                </Box>
            </BrowserRouter >
        </Box>
    );
}


export default App