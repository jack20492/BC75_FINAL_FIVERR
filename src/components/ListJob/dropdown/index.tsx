import { Box,  Link } from "@mui/material"
import { useDropdown } from "~/hooks/dropDown-hook"
import styles from './Dropdown.module.scss'


export default function Dropdowns({ renderDropdown, onSendData}: any) {

  const { data, isLoading, error } = useDropdown(renderDropdown)

  if (isLoading) {
    return <div>Loading data...</div>
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>
  };
  
  const handleJobClick = (jobId: number) => {
    onSendData(jobId)
};

  return (
    <>
      { data && data.map((dataItem: any) => (
        <Box key={dataItem.id} className={styles.flex}>
          {dataItem.dsNhomChiTietLoai.map((item: any) => (
            <Box key={item.id} className={styles.flexColumn}>
              <h6
                key={item.id}
                className={styles.link}
              >
                {item.tenNhom}
              </h6>
              {item.dsChiTietLoai.map((items: any) => (
                <Link
                  onClick={() => handleJobClick(items.id!)}
                  key={items.id} 
                  className={styles.nameDetails}
                >
                  {items.tenChiTiet}
                </Link>
              ))}
            </Box>
          ))}
        </Box>
      ))}
      
    </>

  )
}

