import { Box, Button, Rating } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddComment } from "~/hooks/addComment-hook";
import { useCommentStore } from "~/store/comment-store";
import { useUserStore } from "~/store/user-store";



export default function AddComment({ props }: any) {
    const commentElement = document.getElementById('comment') as HTMLTextAreaElement;

    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();
    const [value, setValue] = useState<number | null>(5);
    const { mutate: addComment } = useAddComment(props);
    const refetchComments = useCommentStore((state) => state.refetchComments);
    const currentDate = new Date();

const day = currentDate.getDate();     // Lấy ngày hiện tại (1-31)
const month = currentDate.getMonth() + 1; // Lấy tháng hiện tại (0-11, cần cộng thêm 1)
const year = currentDate.getFullYear(); // Lấy năm hiện tại (4 chữ số)
    const handleComment = async () => {
        const dataComment = {
            maNguoiBinhLuan: user?.id!,
            noiDung: (document.getElementById('comment') as HTMLInputElement)?.value ?? '',
            ngayBinhLuan: `${day}/${month}/${year}`,
            saoBinhLuan: value!,
            maCongViec: props,
        };

        await addComment(dataComment);
        refetchComments();
        commentElement.value = '';
    }
    return (
        user ? (
            <Box display='flex' flexDirection='column'>
                <Box style={{ margin: '0 0 1vh 3vh', display: 'flex', alignItems: 'center' }}>
                    <p style={{ paddingTop: '2vh' }}>Đánh giá :</p>
                    <Rating
                        style={{ margin: '2vh 0 0 2vh' }}
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
                <Box display='flex'>
                    <img src={user?.avatar} style={{width: "30px", height: "30px", borderRadius: "50%", marginRight: "2vh"}}/>
                    <textarea id="comment" name="comment" placeholder="Nhập bình luận của bạn..." style={{ width: '70%' }}></textarea>
                </Box>
                <Button onClick={handleComment} style={{ width: '15vw', margin: '2vh 0 0 2vh' }} variant="contained">Add Comment</Button>
            </Box>
        ) : (
            <Box >
                <Button onClick={() => {navigate('/login')  }} style={{ margin: '2vh 0 0 2vh' }} variant="contained">Login to Add Comment</Button>
            </Box>
        )
    )
}
