import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <>
            {isVisible && (
                <IconButton onClick={scrollToTop} sx={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
                    <KeyboardArrowUpIcon />
                </IconButton>
            )}
        </>
    );
};

export default BackToTop;
