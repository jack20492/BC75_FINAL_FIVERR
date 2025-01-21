import { CardMedia } from "@mui/material";
import Card from '@mui/material/Card';
import { Box,  Link } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import { uselistjobsearch } from "~/hooks/listJobSearch-hook";
import styles from './listJobSearch.module.scss';
import { useNavigate } from "react-router-dom";


export default function ListJobSearch(props: any) {
    const formattedText = props.tenCV.replace(/ /g, '%20');
    const { data, isLoading, error } = uselistjobsearch(formattedText)
    const navigate = useNavigate();
    if (isLoading) {
        return <div>Loading data...</div>
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>
    };
    
  return (
    <Box className={styles.listJobDetail}>
      {data &&
                data.map((dataItem: any) => (
                    <Card onClick={() => navigate(`/job-detail/${dataItem.id}`)} className={styles.cardItem}>
                        <CardMedia
                            sx={{ height: 200, width: 300 }}
                            image={dataItem.congViec.hinhAnh}
                            title="green iguana"
                            className={styles.img}
                        />
                        <Box display="flex" alignItems="center"  >
                            <Avatar style={{ marginRight: '10px' }} alt="User Name" src={dataItem.avatar} />
                            <h6>{dataItem.tenNguoiTao} </h6>
                        </Box>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {dataItem.congViec.tenCongViec}
                                <Box display="flex" alignItems="center">
                                    <Rating name="half-rating-read" defaultValue={dataItem.congViec.saoCongViec} precision={0.5} readOnly />
                                    ({dataItem.congViec.danhGia})
                                </Box>
                                <Box className={styles.starting}>
                                    <FavoriteIcon />
                                    <Link> STARTING AT ${dataItem.congViec.giaTien}</Link>
                                </Box>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
    </Box>
  )
}
