import { Stack } from '@mui/system'
import React from 'react'

import { categories } from '../utils/constants'

var selectedCategory = "New";
const SideBar = ({ number }) => {
    return (

        <Stack direction="row"
            sx={{
                mt: 1.5,
                overflowY: 'auto',
                flexDirection: { xs: 'row', md: 'column' }
            }}>
            {categories.map((category) => (
                <button className='category-btn'
                    style={{ background: category.name === selectedCategory && '#FC1503', color: 'white' }}
                    key={category.name}>
                    <span style={{ color: category.name !== selectedCategory ? '#FC1503' : "white", marginRight: "15px" }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default SideBar