import { Avatar, Box, Container, Rating, Typography } from "@mui/material"
import styles from "./Comment.module.scss"
import { useGetComment } from "~/hooks/getComment-hook"
import { useCommentStore } from "~/store/comment-store"
import { useEffect, useState  } from "react"


export default function Comment({ props }: any) {
    interface Comment {
        id: number;
        avatar: any;
        tenNguoiBinhLuan: any;
        saoBinhLuan: any; 
        noiDung:any;
        ngayBinhLuan:any
      }
      const [showAll, setShowAll] = useState(false);
    const { data, isLoading, refetch, error } = useGetComment(props);
    const setRefetchComments = useCommentStore((state) => state.setRefetchComments);
    useEffect(() => {
        setRefetchComments(() => refetch);
    }, [refetch, setRefetchComments]);

    if (isLoading) {
        return <div>Loading data...</div>;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }
    const sortedComments = data.slice().sort((a: Comment, b: Comment) => {
        const dateA = new Date(a.ngayBinhLuan.split('/').reverse().join('/'));
        const dateB = new Date(b.ngayBinhLuan.split('/').reverse().join('/'));
        return dateB.getTime() - dateA.getTime();
      });

      
    const toggleShowAll = () => {
        setShowAll(prev => !prev);
      };
      const commentsToShow = showAll ? sortedComments : sortedComments.slice(0, 3);
    return (
        < >
            {data && commentsToShow.map((dataItem: any) => (
                <Box key={dataItem.id} style={{ marginBottom: '2vh' }}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={dataItem.avatar} />
                        <Typography style={{ margin: '0 10px', fontWeight: 'bold' }} component="legend">{dataItem.tenNguoiBinhLuan}</Typography>
                        <Rating
                            name="read-only"
                            value={dataItem.saoBinhLuan}
                            readOnly
                        />
                    </Box>
                    <Box className={styles.comment}>
                        <Typography style={{ margin: '1vh 2vw' }} component="legend">{dataItem.noiDung}</Typography>
                    </Box>
                    <Box style={{ margin: '0 2vw', color: '#b5b6ba' }}>
                        {dataItem.ngayBinhLuan}
                    </Box>
                </Box>
            ))}
            {!showAll && (
        <button onClick={toggleShowAll}>Show more</button>
      )}
        </>
    )
}
