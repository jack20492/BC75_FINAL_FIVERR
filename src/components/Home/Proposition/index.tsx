import { Box, Container, Modal, Typography } from '@mui/material'
import styles from './Proposition.module.scss';
import propositionImg from '~/assets/selling.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';

export default function Proposition() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleVideoOpen = () => {
    setVideoOpen(true);
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  return (
    <>
      <Container className={styles.propositionContainer} maxWidth={false}>
        <Container className={styles.mainContainer} maxWidth='lg'>
          <Box className={styles.leftContainer}>
            <Typography variant='h4' fontWeight={'bold'}>
              A whole world of freelance talent at your fingertips
            </Typography>
            <Box className={styles.leftContentCheckpoint}>
              <Box className={styles.checkpointTitle}>
                <CheckCircleOutlineIcon />
                <Typography fontSize={'1.15vw'} fontWeight={'bold'}>
                  The best for every widget
                </Typography>
              </Box>
              <Box className={styles.checkpointContent}>
                <Typography fontWeight='light' variant='body1'>
                  Find high-quality services at every price point. No hourly rates, just project-based pricing.
                </Typography>
              </Box>
            </Box>
            <Box className={styles.leftContentCheckpoint}>
              <Box className={styles.checkpointTitle}>
                <CheckCircleOutlineIcon />
                <Typography fontSize={'1.15vw'} fontWeight={'bold'}>
                  Quality work done quickly
                </Typography>
              </Box>
              <Box className={styles.checkpointContent}>
                <Typography fontWeight='light' variant='body1'>
                  Find the right freelancer to begin working on your project within minutes.
                </Typography>
              </Box>
            </Box>
            <Box className={styles.leftContentCheckpoint}>
              <Box className={styles.checkpointTitle}>
                <CheckCircleOutlineIcon />
                <Typography fontSize={'1.15vw'} fontWeight={'bold'}>
                  Protected payments, every time
                </Typography>
              </Box>
              <Box className={styles.checkpointContent}>
                <Typography fontWeight='light' variant='body1'>
                  Always know what you'll pay upfront. Your payment isn't released until you approve the work.
                </Typography>
              </Box>
            </Box>
            <Box className={styles.leftContentCheckpoint}>
              <Box className={styles.checkpointTitle}>
                <CheckCircleOutlineIcon />
                <Typography fontSize={'1.15vw'} fontWeight={'bold'}>
                  24/7 support
                </Typography>
              </Box>
              <Box className={styles.checkpointContent}>
                <Typography fontWeight='light' variant='body1'>
                  Questions? Our round-the-clock support team is available to help anytime, anywhere.                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.rightContainer}>
            <Box className={styles.video} onClick={handleVideoOpen}>
              <img src={propositionImg} alt="Video Thumbnail" className={styles.videoThumbnail} />
              <button className={styles.playButton}>▶</button>
            </Box>
          </Box>
        </Container>
      </Container>
      <Modal className={styles.videoPopup} open={videoOpen} onClose={handleVideoClose}>
        <Box>
          <video controls autoPlay>
            <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
    </>

  )
}
