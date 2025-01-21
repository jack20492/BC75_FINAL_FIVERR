// CustomCarousel.tsx
import crs1 from '~/assets/crs1.png'
import crs2 from '~/assets/crs2.png'
import crs3 from '~/assets/crs3.png'
import crs4 from '~/assets/crs4.png'
import crs5 from '~/assets/crs5.png'
import crs6 from '~/assets/crs6.png'
import crs7 from '~/assets/crs7.png'
import crs8 from '~/assets/crs8.png'
import crs9 from '~/assets/crs9.png'
import crs10 from '~/assets/crs10.png'
import styles from './Carousel.module.scss';
const images = [crs1, crs2, crs3, crs4, crs5, crs6, crs7, crs8, crs9, crs10];

import { Carousel } from "antd";
import { Container, useTheme, useMediaQuery, Box, Typography } from '@mui/material'

export default function CustomCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const getSlidesToShow = () => {
    if (isMobile) return 1;
    if (isTablet) return 3;
    if (isDesktop) return 5;
    return 5;
  };

  return (
    <Container>
    <Container maxWidth='lg' className={styles.carouselContainer}>
      <Box>
        <Typography variant='h4' sx={{ fontWeight: 'bold', padding: '0 0 1.5vw 1.5vw'}}>
          Popular professional services
        </Typography>
      </Box>
      <Carousel
        dots={false}
        arrows
        infinite={false}
        slidesToShow={getSlidesToShow()}
        className={styles.imageContainer}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </Container>
    </Container>
  );
}
