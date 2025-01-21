import { Avatar, Box, Button, Container, Rating, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { usejobdetail } from "~/hooks/jobdetail-hook"
import styles from './jobDetail.module.scss'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FAQ from "../FAQ";
import Comment from "../Get-Comment";
import ButtonHireJob from "../Button-HireJob";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Fragment } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
export default function JobDetails({ props }: any) {

  const { id } = useParams()
  console.log(id)
  const { data, isLoading, error } = usejobdetail(props > 0 ? props : id)
  console.log(data)
  if (isLoading) {
    return <div>Loading data...</div> 
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>
  };

  const renderFormattedContent = (text: string) => {
    const formattedText = text.split('\r\n\r\n\r\n\r\n').map((paragraph: string) => (
      <p>
        {paragraph.split('\r\n').map((line: any, index: any) => (
          <Fragment key={index}>
            {line}<br />
          </Fragment>
        ))}
      </p>
    ));
    return formattedText;
  };

  return (
    <Container className={styles.containerContent} style={{ display: 'flex' }}>
      <Box className={styles.contentLeft}>
        {data && data.length > 0 &&
          data.map((dataItem: any) => (
            <>
              <h6 style={{ marginBottom: '1vh', color: 'blue' }}>
                {dataItem.tenLoaiCongViec}
                <KeyboardArrowRightIcon />
                {dataItem.tenNhomChiTietLoai}
                <KeyboardArrowRightIcon />
                {dataItem.tenChiTietLoai}
              </h6>
              <h5>{dataItem.congViec.tenCongViec}</h5>
              <Box style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }} >
                <Avatar
                  style={{ marginRight: '10px' }}
                  alt="User Name"
                  src={dataItem.avatar}
                />
                <p
                  style={{ fontSize: '14px', fontWeight: 'bold' }}
                >
                  {dataItem.tenNguoiTao}
                </p>
                <Rating
                  name="half-rating-read"
                  defaultValue={dataItem.congViec.saoCongViec}
                  precision={0.5}
                  readOnly
                />
                <span>
                  ({dataItem.congViec.danhGia})
                </span>
              </Box>

              <Box style={{ width: '100%', height: '1px', backgroundColor: '#c7c7d1' }}></Box>

              <Box className={styles.buyers}>
                <ShoppingBagIcon style={{ marginRight: '10px' }} />
                <span style={{ marginRight: '10px', fontWeight: '600' }}>Buyers keep returning!</span>
                <span>nofilrazzaq has an exceptional number of repeat buyers.</span>
              </Box>
              <Box>
                <img style={{ width: '100%', margin: '40px 0' }} src={dataItem.congViec.hinhAnh} />
              </Box>
              <Box>
                {renderFormattedContent(dataItem.congViec.moTa)}
              </Box>
              <Box className={styles.seller}>
                <h3>About The Seller</h3>
                <Box className={styles.contentSeller}>
                  <Avatar
                    style={{ marginRight: '10px', width: '20vh', height: '20vh' }}
                    alt="User Name"
                    src={dataItem.avatar}
                  />
                  <Box>
                    <p
                      style={{ fontSize: '4vh', fontWeight: '600' }}
                    >
                      {dataItem.tenNguoiTao}
                    </p>
                    <Box className={styles.rating}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={dataItem.congViec.saoCongViec}
                        precision={0.5}
                        readOnly
                      />
                      <span>
                        ({dataItem.congViec.danhGia})
                      </span>
                    </Box>
                    <Button variant="outlined">Contact Me</Button>
                  </Box>
                </Box>
              </Box>
            </>
          ))}
        <FAQ />
        <Comment props={props > 0 ? props : id} />
      </Box>
      <Box className={styles.contentRight}>
        <Box className={styles.boxAbove}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: '#dcdce0', fontWeight: 'bold', borderRight: '1px solid #c7c7d1' }} align="center">Basic</TableCell>
                <TableCell style={{ fontWeight: 'bold', color: '#faaf00', borderBottom: '5px solid #faaf00' }} align="center">Standard</TableCell>
                <TableCell style={{ backgroundColor: '#dcdce0', fontWeight: 'bold', borderLeft: '1px solid #c7c7d1' }} align="center">Premium</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} >
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5>Standard</h5>
                    {data && data.map((item: any) => (
                      <h5>${item.congViec.giaTien}</h5>
                    ))}
                  </Box>
                  <p style={{ margin: '3vh 0' }}>Create a simple web application for your business.</p>
                  <Box>
                    {data && data.map((item: any) => (
                      <>{renderFormattedContent(item.congViec.moTaNgan)}</>
                    ))}
                  </Box>
                  <Box>
                    {data && data.map((item: any) => (
                      <ButtonHireJob props={{ giaTien: item.congViec.giaTien, maChiTietLoaiCongViec: item.congViec.maChiTietLoaiCongViec }} />
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        <Box textAlign='center'  >
          <h5 style={{ margin: '3vh 0' }}>Do you have any special requirements?</h5>
          <Button style={{ marginBottom: '3vh' }} color="inherit" variant="outlined">Get a Quote</Button>
        </Box>
      </Box>
    </Container>
  )
}


