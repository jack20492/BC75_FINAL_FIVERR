import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import { Container, Link } from "@mui/material";
import styles from "~/components/Home/Category/Category.module.scss";
import { Carousel } from "antd";
import React from "react";
import graphicsDesignIcon from "~/assets/graphics-design.png";
import onlineMarketingIcon from "~/assets/online-marketing.png";
import writingTranslationIcon from "~/assets/writing-translation.png";
import videoAnimationIcon from "~/assets/video-animation.png";
import musicAudioIcon from "~/assets/music-audio.png";
import programmingIcon from "~/assets/programming.png";
import businessIcon from "~/assets/business.png";
import lifestyleIcon from "~/assets/lifestyle.png";
import dataIcon from "~/assets/data.png";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "auto",
  lineHeight: "160px",
  textAlign: "center",
  // background: '#364d79',
};

export default function Category() {
  return (
    <>
      <Container disableGutters className={styles.cateContainer} maxWidth="xl">
        <Container maxWidth="lg">
          <Carousel style={contentStyle} arrows infinite={false}>
            <Box className={styles.itemCarousel}>
              <Box className={styles.itemLeft}>
                <iframe
                  width="auto"
                  height={355}
                  src="https://www.youtube.com/embed/YSMWN8VpY6A"
                  title="How Singapore Got So Crazy Rich"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Box>
              <Box className={styles.itemRight}>
                <Box className={styles.author}>
                  {" "}
                  Kay Kim, Co-Founder |{" "}
                  <label className={styles.rooter}> Rooter</label>{" "}
                </Box>
                <Box className={styles.text}>
                  {" "}
                  "It's extremely exciting that Fiverr has freelancers from all
                  over the woeld - it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleeping, someone's
                  working."{" "}
                </Box>
              </Box>
            </Box>
            <Box className={styles.itemCarousel}>
              <Box className={styles.itemLeft}>
                <iframe
                  width="auto"
                  height={355}
                  src="https://www.youtube.com/embed/4YuNvIfM-YA"
                  title="The Densest City on Earth"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Box>
              <Box className={styles.itemRight}>
                <Box className={styles.author}>
                  {" "}
                  Caitlin Tormey, Chief Commercial Officer, Co-Founder |{" "}
                  <label className={styles.rooter}> Rooter</label>{" "}
                </Box>
                <Box className={styles.text}>
                  {" "}
                  "We've used Fiverr for Shopify web development, graphic
                  design, and backend web development. Working with Fiverr makes
                  my job a little easier every day."{" "}
                </Box>
              </Box>
            </Box>
            <Box className={styles.itemCarousel}>
              <Box className={styles.itemLeft}>
                <iframe
                  width="auto"
                  height={355}
                  src="https://www.youtube.com/embed/TY0Y6FzsRHU"
                  title="How 2nd-Gen Vietnamese Are Settling Into Czech Republic With New Careers"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Box>
              <Box className={styles.itemRight}>
                <Box className={styles.author}>
                  {" "}
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder |{" "}
                  <label className={styles.rooter}> Rooter</label>{" "}
                </Box>
                <Box className={styles.text}>
                  {" "}
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos - literally everything. It was like woeking with a
                  human right next to you versus being across the world"{" "}
                </Box>
              </Box>
            </Box>
            <Box className={styles.itemCarousel}>
              <Box className={styles.itemLeft}>
                <iframe
                  width="auto"
                  height={355}
                  src="https://www.youtube.com/embed/SLrJVbJLH34"
                  title="This is Halong Bay, VIETNAM in 2025! 🇻🇳 A Must See!"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Box>
              <Box className={styles.itemRight}>
                <Box className={styles.author}>
                  {" "}
                  Tim and Dan Joo, Co-Founders |{" "}
                  <label className={styles.rooter}> Rooter</label>{" "}
                </Box>
                <Box className={styles.text}>
                  {" "}
                  "When you want to cerate a business bigger than yoursell, you
                  need a lot of help. That's what Fiverr does."{" "}
                </Box>
              </Box>
            </Box>
          </Carousel>

          <h1>Explore the marketplace</h1>

          <Box sx={{ width: "100%" }}>
            <Grid
              container
              className={styles.categories}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img src={graphicsDesignIcon} alt="icon" />
                    </Box>
                    {/* <Box className={styles.decorationIcon}></Box> */}
                    <Box className={styles.text}>Graphics & Design</Box>
                  </Link>
                </Item>
              </Grid>
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img src={onlineMarketingIcon} alt="icon" />
                    </Box>
                    <Box className={styles.text}>Digital Marketing</Box>
                  </Link>
                </Item>
              </Grid>
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img src={writingTranslationIcon} alt="icon" />
                    </Box>
                    <Box className={styles.text}>Writing & Translation</Box>
                  </Link>
                </Item>
              </Grid>
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img src={videoAnimationIcon} alt="icon" />
                    </Box>
                    <Box className={styles.text}>Video & Animation</Box>
                  </Link>
                </Item>
              </Grid>
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img src={musicAudioIcon} alt="icon" />
                    </Box>
                    <Box className={styles.text}>Music & Audio</Box>
                  </Link>
                </Item>
              </Grid>
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img src={programmingIcon} alt="icon" />
                    </Box>
                    <Box className={styles.text}>Programming & Tech</Box>
                  </Link>
                </Item>
              </Grid>
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img src={businessIcon} alt="icon" />
                    </Box>
                    <Box className={styles.text}>Business</Box>
                  </Link>
                </Item>
              </Grid>
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img src={lifestyleIcon} alt="icon" />
                    </Box>
                    <Box className={styles.text}>Lifestyle</Box>
                  </Link>
                </Item>
              </Grid>
              <Grid>
                <Item className={styles.item}>
                  <Link>
                    <Box className={styles.icon}>
                      <img height={5} src={dataIcon} alt="icon" />
                    </Box>
                    <Box className={styles.text}>Data</Box>
                  </Link>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box className={styles.endLine}></Box>
      </Container>
    </>
  );
}
