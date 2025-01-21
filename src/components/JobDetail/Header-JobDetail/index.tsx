import { Avatar,Box, Button, Container, Input, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './HeaderJobDetail.module.scss';
import { useListJob } from '~/hooks/listJob-typejob-hook';
import Dropdowns from '~/components/ListJob/dropdown';
import { useState } from 'react';
import JobDetails from '../JobDetails';
import AddComment from '../Add-Comment';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '~/store/user-store';
import { Dropdown, Space } from 'antd'
export default function HeaderJobDetail() {

    const [selectedJobDetailId, setSelectedJobDetailId] = useState(-1);
    const [selectedJobId, setSelectedJobId] = useState(-1);
    const navigate = useNavigate();
    const { data, isLoading, error } = useListJob()
    const user = useUserStore((state) => state.user);
    const items = [
        {
            key: '1',
            label: (
                user ? (
                    <a target="_blank" rel="noopener noreferrer" onClick={() => {
                        localStorage.removeItem('user');
                        navigate('/login');
                    }} >
                        Log-out
                    </a>
                ) : (
                    <Link className={styles.logo} onClick={() => navigate('/login')}> Login  </Link>
                )
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => navigate('/user-detail')}>
                    Setting
                </a>
            ),
        },
    ];

    if (isLoading) {
        return <div>Loading data...</div>
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>
    };


    const handleJobIdFromDropdown = (jobId: number) => {
        setSelectedJobDetailId(jobId);
    };



    const handleJobClick = (jobId: number) => {
        setSelectedJobId(jobId);
    };

    return (
        <>
            <Container>
                <Box className={styles.headerAbove} onClick={() => navigate('/')}>
                    <Box className={styles.left}>
                        <Box className={styles.logo}>
                            <span>
                                <svg width={91} height={27} viewBox="0 0 91 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#000000">
                                        <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z" />
                                    </g>
                                    <g fill="#ffa500">
                                        <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z" />
                                    </g>
                                </svg>
                            </span>
                        </Box>
                        <Box className={styles.search}>
                            <SearchIcon className={styles.icon} />
                            <Input className={styles.inputSearch} disabled={false} placeholder="Find Services" />
                            <Button className={styles.buttonSearch}>Search</Button>
                        </Box>
                    </Box>
                    <Box className={styles.right}>
                        <Link className={styles.item}>Fiverr Pro</Link>
                        <Link className={styles.item}>Explore</Link>
                        <Link className={styles.item}>Messages</Link>
                        <Link className={styles.item}>Lists</Link>
                        <Link className={styles.item}>Orders</Link>
                        <Space direction="vertical">
                            <Space wrap>

                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    placement="top"
                                    arrow
                                    
                                >
                                    <Avatar sx={{ width: 40, height: 40 }} />
                                </Dropdown>
                            </Space>
                        </Space>
                        
                    </Box>
                </Box>
            </Container>
            <Box className={styles.line}></Box>
            <Container>
                <Box className={styles.headerBelow}>
                    {data &&
                        data.map((dataItem) => (
                            <>
                                <Link
                                    className={styles.item}
                                    onMouseEnter={() => handleJobClick(dataItem.id!)}
                                >
                                    {dataItem.tenLoaiCongViec}
                                    <Box className={styles.dropdowncontent}>
                                        <Dropdowns 
                                        onSendData={(jobId:number) => handleJobIdFromDropdown(jobId)} 
                                        renderDropdown={selectedJobId} 
                                        />
                                    </Box>
                                </Link>

                            </>
                        ))}
                </Box>

            </Container>
            <Box className={styles.line}></Box>
            
            <Container>
                <JobDetails props={selectedJobDetailId} />
            </Container>
            <Container>
                <AddComment props={selectedJobDetailId}/>
            </Container>
        </>
    )
}
