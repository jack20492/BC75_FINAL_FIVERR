 

import Box from '@mui/material/Box/Box'
import Container from '@mui/material/Container/Container'
import Link from '@mui/material/Link/Link'
import styles from '~/components/Home/Footer/Footer.module.scss'



export default function Footer() {
    return (

        <Container disableGutters className={styles.footerContainer} >
            <Container maxWidth="lg">
                <Box className={styles.navBar} >
                    <Box className={styles.item}>
                        <h3>Categories</h3>
                        <Link>  Digital Marketing</Link>
                        <Link> Writing & Translation </Link>
                        <Link> Video & Animation </Link>
                        <Link> Music & Audio </Link>
                        <Link> Programming  & Tech </Link>
                        <Link>Data </Link>
                        <Link>Business </Link>
                        <Link>Lifestyle</Link>
                        <Link>Sitemap</Link>
                    </Box>
                    <Box className={styles.item}>
                        <h3>About</h3>
                        <Link>Careers </Link>
                        <Link>Press & News </Link>
                        <Link>Partnerships </Link>
                        <Link>Privacy Policy </Link>
                        <Link>Terms of Service </Link>
                        <Link>Intellectual Property Claims </Link>
                        <Link>Investor Relations </Link>
                    </Box>
                    <Box className={styles.item}>
                        <h3>Support</h3>
                        <Link>Help & Support</Link>
                        <Link>Trust & Safety</Link>
                        <Link>Selling in Fiverr</Link>
                        <Link>Buying om Fiverr</Link>
                    </Box>
                    <Box className={styles.item} > 
                        <h3>Community</h3>
                        <Link>Event</Link>
                        <Link>Blog</Link>
                        <Link>Forum</Link>
                        <Link>Community Standard</Link>
                        <Link>Podcast</Link>
                        <Link>Affiliates</Link>
                        <Link>Invita a Friend</Link>
                        <Link>Become a Seller</Link>
                        <Link>
                            Diverr Elevate
                            <p> Exclusuve Benefits</p>
                        </Link>
                    </Box>
                    <Box className={styles.item}>
                        <h3>More From Fiverr</h3>
                        <Link>Fiverr Business</Link>
                        <Link>Fiverr Pro</Link>
                        <Link>Fiverr Studios</Link>
                        <Link>Fiverr Logo Maker</Link>
                        <Link>Fiverr Guides</Link>
                        <Link>Get Inspired</Link>
                        <Link>
                            ClearVoice
                            <p>Content Marketing</p>
                        </Link>
                        <Link>
                            AND CO
                            <p>Invoice Software</p>
                        </Link>
                        <Link>
                            Learn
                            <p>Online Courses</p>
                        </Link>
                    </Box>
                </Box>
                <div className={styles.horizontalLine}></div>
                <Box className={styles.footer} sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Box className={styles.footerLeft} >
                        <span className="logo_footer">
                            <svg width={91} height={27} viewBox="0 0 91 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g fill="#7A7D85">
                                    <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z" />
                                </g>
                                <g fill="#7A7D85">
                                    <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z" />
                                </g>
                            </svg>
                        </span>

                        <Box className={styles.footerText}> @Fiverr International Ltd. 2021</Box>
                    </Box>
                    <Box className={styles.footerRight} >
                        <Box className={styles.iconContact}>
                            <Link><i className="fab fa-twitter" /></Link>
                            <Link><i className="fab fa-facebook" /></Link>
                            <Link><i className="fab fa-invision" /></Link>
                            <Link><i className="fab fa-pinterest" /></Link>
                            <Link><i className="fab fa-instagram" /></Link>
                        </Box>
                        <Box className={styles.iconText}>
                            <Link><i className="fa fa-globe"> English </i></Link>
                            <Link><i className="fa fa-dollar-sign"> USD </i></Link>

                        </Box>
                        <Box className={styles.iconPerson}>
                            <Link >
                                <i className="fa-solid fa-person"></i>
                            </Link>
                        </Box>


                    </Box>

                </Box>
            </Container>
            <Box className={styles.endLine}></Box>

            </Container>

    )
}
