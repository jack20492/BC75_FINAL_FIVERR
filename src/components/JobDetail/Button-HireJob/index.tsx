import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useHireJob } from "~/hooks/hireJob-hook";
import { useUserStore } from "~/store/user-store";


export default function ButtonHireJob({ props }: any) {

    const navigate = useNavigate();
    const user = useUserStore((state) => state.user);
    const onSuccess = () => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
        })
      };
    
      const onError = (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Sign In Failed',
          text: ' Please Login And Try Again',
        });
      };
    const { mutate: hireJob } = useHireJob(onSuccess, onError);
    const handleClick = () => {
        const dataHireJob = {
            maCongViec: props.maChiTietLoaiCongViec,
            maNguoiThue: user?.id,
            ngayThue: new Date().toLocaleDateString() ,
            hoanThanh: true,
        }
        if (user) {
            hireJob(dataHireJob)
        } else {
            navigate('/login')
        }
    }
    return (
        <>
            <Button onClick={handleClick} style={{ width: '100%', margin: '2vh 0' }} variant="contained" color="primary">Continue (${props.giaTien})</Button>
        </>
    )
}
