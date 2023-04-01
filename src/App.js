import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, SearchFeed, VideoDetail, ChannelDetail, Feed } from './components';

function App() {
    return (

        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                    <Route path="/search/:searchQuery" element={<SearchFeed />} />
                    <Route path="/channel/:id" element={<ChannelDetail />} />
                </Routes>
            </Box>
        </BrowserRouter>

    );
}


export default App