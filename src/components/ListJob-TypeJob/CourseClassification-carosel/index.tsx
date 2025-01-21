import { Box, Button, Container} from "@mui/material";
import styles from './CourseClassification-carosel.module.scss'
import icon from '~/assets/graphics-design.png';



export default function CourseClassificationCarousel() {
    
    return (
        <Container>
            <Box className={styles.carosel}>
                <Box className={styles.above}>
                    <Box className={styles.title}>Graphics & Design</Box>
                    <Box className={styles.text}>Designs to make you stand out.</Box>
                    <Button className={styles.button}>
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                        How Fiverr Works
                    </Button>
                </Box>
                <h2 className={styles.textMostPopular}>Most popular in Fraphics & Design</h2>
                <Box className={styles.below}>
                <Box className={styles.item}>
                            <Box>
                                <img className={styles.logo} src={icon} alt="icon" />
                            </Box>
                            <Box className={styles.text}>Minimalist Logo Design</Box>
                            <Box className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                            </Box>
                        </Box>
                        <Box className={styles.item}>
                            <Box>
                                <img className={styles.logo} src={icon} alt="icon" />
                            </Box>
                            <Box className={styles.text}>Minimalist Logo Design</Box>
                            <Box className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                            </Box>
                        </Box>
                        <Box className={styles.item}>
                            <Box>
                                <img className={styles.logo} src={icon} alt="icon" />
                            </Box>
                            <Box className={styles.text}>Minimalist Logo Design</Box>
                            <Box className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                            </Box>
                            
                        </Box>
                        <Box className={styles.item}>
                            <Box>
                                <img className={styles.logo} src={icon} alt="icon" />
                            </Box>
                            <Box className={styles.text}>Minimalist Logo Design</Box>
                            <Box className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
                            </Box>
                            
                        </Box>
        
                </Box>
            </Box>
        </Container>
    )
}


