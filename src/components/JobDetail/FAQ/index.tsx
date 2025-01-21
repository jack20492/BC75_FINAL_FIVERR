import { Box, Container, Rating } from "@mui/material";
import styles from './FAQ.module.scss'
import ExpandMore from '@mui/icons-material/ExpandMore';
import Star from '@mui/icons-material/Star';

export default function FAQ() {
    return (
        <Box className={styles.containerFAQ}>
            <h4 style={{ fontWeight: 'bold' }}>FAQ</h4>
            <Box className={styles.questions}>
                <Box className={styles.item}>
                    <p> Do you provide regular updates on order ?</p>
                    <ExpandMore />
                </Box>
                <Box className={styles.line}></Box>
                <Box className={styles.item}>
                    <p> How do you guarantee product quality and rellabllity ?</p>
                    <ExpandMore />
                </Box>
                <Box className={styles.line}></Box>
                <Box className={styles.item}>
                    <p> Do you give post-development support ?</p>
                    <ExpandMore />
                </Box>
                <Box className={styles.line}></Box>
                <Box className={styles.item}>
                    <p> Do you senvert PSD to HTML ?</p>
                    <ExpandMore />
                </Box>
            </Box>
            <Box className={styles.reviews}>
                <Box className={styles.reviewsLeft}>
                    <Box className={styles.reviewsTitle}>
                        <h4>335 Reviews</h4>
                        <Rating name="read-only" value={5} readOnly />
                    </Box>
                    <Box className={styles.reviewsItem}>
                        <p> 5 Stars</p>
                        <div className={styles.line}></div>
                        <p>(333)</p>
                    </Box>
                    <Box className={styles.reviewsItem}>
                        <p> 4 Stars</p>
                        <div className={styles.line4S}></div>
                        <p>(2)</p>
                    </Box>
                    <Box className={styles.reviewsItemHiden}>
                        <p> 3 Stars</p>
                        <div className={styles.line3S}></div>
                        <p>(0)</p>
                    </Box>
                    <Box className={styles.reviewsItemHiden}>
                        <p> 2 Stars</p>
                        <div className={styles.line3S}></div>
                        <p>(0)</p>
                    </Box>
                    <Box className={styles.reviewsItemHiden}>
                        <p> 1 Stars</p>
                        <div className={styles.line3S}></div>
                        <p>(0)</p>
                    </Box>
                </Box>
                <Box className={styles.reviewsRight}>
                    <Box className={styles.reviewsRightTitle}>
                        <p>Sort By</p>
                        <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>Most relevant</span>
                        <ExpandMore style={{ fontSize: '20px' }} />
                    </Box>
                    <Box>
                        <p style={{ fontWeight: '600' }}> Reating Breakdown</p>
                    </Box>
                    <Box className={styles.reviewsRightContent}>
                        <Box className={styles.flex}>
                            <p>Seller communicatlon level</p>
                            <Box className={styles.item}>
                                <p> 5 </p>
                                <Star style={{ color: '#FAAF00' }} />
                            </Box>
                        </Box>
                        <Box className={styles.flex}>
                            <p>Recomment to a friend</p>
                            <Box className={styles.item}>
                                <p> 5 </p>
                                <Star style={{ color: '#FAAF00' }} />
                            </Box>
                        </Box>
                        <Box className={styles.flex}>
                            <p>Service as described</p>
                            <Box className={styles.item}>
                                <p> 5 </p>
                                <Star style={{ color: '#FAAF00' }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box margin={'3vh 0'}>
                <h4>Fillters</h4>
                <Box display={'flex'}>
                    <p>Industry</p>
                    <p style={{ fontWeight: 'bold', margin:'0 10px' }}>All Industries</p>
                    <ExpandMore style={{ fontSize: '20px' }} />
                </Box>
            </Box>
        </Box>
    )
}
