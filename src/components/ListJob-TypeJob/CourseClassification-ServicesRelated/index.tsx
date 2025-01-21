import { Box, Container } from "@mui/material";
import styles from './CourseClassification-SevicesRelated.module.scss'

export default function CourseClassificationServicesRelated() {
    return (
        <Container className={styles.footer}>
            <Box className={styles.servicesRelated}>
                <h2 className={styles.title}> Services Related To Graphics & Design</h2>
                <Box className={styles.servicesAbove}>
                    <Box className={styles.item}>Minimallst logo design</Box>
                    <Box className={styles.item}>Signature logo design</Box>
                    <Box className={styles.item}>Mascot logo design</Box>
                    <Box className={styles.item}>3d logo design</Box>
                    <Box className={styles.item}>Hand drawn logo design</Box>
                    <Box className={styles.item}>Vintage logo design</Box>
                    <Box className={styles.item}>Remove  background</Box>
                </Box>
                <Box className={styles.servicesBetween}>
                    <Box className={styles.item}>Photo restoration</Box>
                    <Box className={styles.item}>Photo retouching</Box>
                    <Box className={styles.item}>Image resize</Box>
                    <Box className={styles.item}>Product lable design</Box>
                    <Box className={styles.item}>Custom twitch overlay</Box>
                    <Box className={styles.item}>Custom twitch emotes</Box>
                    <Box className={styles.item}>Gaming logo</Box>
                    <Box className={styles.item}>Children book illustration</Box>
                </Box>
                <Box className={styles.servicesBelow}>
                    <Box className={styles.item}>Instagram design</Box>
                    <Box className={styles.item}>Movle poster design</Box>
                    <Box className={styles.item}>Box design</Box>
                    <Box className={styles.item}>Logo maker</Box>
                    <Box className={styles.item}>Logo ideas</Box>
                </Box>
            </Box>
        </Container>
    )
}
