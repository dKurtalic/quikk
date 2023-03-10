import React from 'react'

const Videos = ({ videos }) => {
    const broj = videos.size
    return (
        <h1 style={{ color: 'white' }}>Ima ${broj} videa</h1>
    )
}

export default Videos