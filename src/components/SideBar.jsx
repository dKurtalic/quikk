import { Stack } from '@mui/system'
import React from 'react'

import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (

        <Stack direction="row"
            sx={{
                mt: 1.5,
                overflowY: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}>
            {categories.map((category) => (
                <button className='category-btn'
                    style={{
                        background: category.name === selectedCategory && 'rgb(252, 21, 3)',
                        color: 'white',
                        transition: 'transform 0.2s ease-in-out'
                    }}
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.15)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    <span style={{ color: category.name !== selectedCategory ? '#FC1503' : "white", marginRight: "15px" }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>

                </button>
            ))}
        </Stack>
    )
}

export default SideBar