import { Box, Container, Link, TextField } from "@mui/material";
import styles from "./UserDetail.module.scss";
import Grid from "@mui/system/Unstable_Grid";
import { Button } from "@mui/base/Button";
import { useUserStore } from "~/store/user-store";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { useUpdateUser } from "~/hooks/user-hook";
import { useDeleteHiredJob, useGetHiredJobs } from "~/hooks/job-hook";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function UserDetail() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const user = useUserStore((state) => state.user);
  const { data: hiredJobs, isLoading, error, refetch } = useGetHiredJobs();
  console.log(hiredJobs);
  const setUser = useUserStore((state) => state.setUser);
  const updateUserMutation = useUpdateUser(
    () => {
      // On success
      setIsEditing(false);
      if (user) {
        setUser({ ...user, name: newName });
      }
    },
    (error) => {
      // On error
      console.error("Failed to update user:", error);
    }
  );

  const handleEditClick = () => {
    if (isEditing) {
      // Save the changes
      if (user) {
        const updatedUser = { ...user, name: newName };
        updateUserMutation.mutate({
          userId: user.id!,
          payload: {
            name: updatedUser.name,
            email: updatedUser.email || "",
            password: updatedUser.password || "",
            phone: updatedUser.phone || "",
            birthday: updatedUser.birthday || "",
            gender: updatedUser.gender || false,
            role: updatedUser.role || "",
            skill: updatedUser.skill || [],
            certification: updatedUser.certification || [],
          },
        });
      }
    } else {
      // Enter edit mode
      setNewName(user?.name || "");
      setIsEditing(true);
    }
  };

  const { mutate: deleteHiredJob } = useDeleteHiredJob(
    () => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Hired job deleted successfully",
      });
      refetch();
    },
    (error) => {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error.message || "An error occurred while deleting the hired job",
      });
    }
  );

  const handleDeleteHiredJob = (jobId: any | null | undefined) => {
    if (jobId === null || jobId === undefined) return;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHiredJob(jobId);
      }
    });
  };

  return (
    <Container className={styles.contentContainer} maxWidth={false}>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%" }}>
          <Grid
            className={styles.content}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={4} className={styles.contentLeft}>
              <Box className={styles.infoAbove}>
                <Box className={styles.logo}> K </Box>
                <Box className={styles.status}>
                  <Box className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#ffa500"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                  </Box>
                  <Box className={styles.text}>online</Box>
                </Box>
                {isEditing ? (
                  <TextField
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className={styles.nameInput}
                  />
                ) : (
                  <Box className={styles.name}>{user?.name}</Box>
                )}
                <Link
                  id="edit"
                  className={styles.edit}
                  onClick={handleEditClick}
                >
                  {isEditing ? "Save" : "Edit"}
                </Link>
                <Box className={styles.from}>
                  <Box className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#CCCCCC"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    From
                  </Box>
                  <Box className={styles.text}>VietNam</Box>
                </Box>
                <Box className={styles.memberSince}>
                  <Box className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    Member since
                  </Box>
                  <Box className={styles.text}>May 2021</Box>
                </Box>
              </Box>
              <Box className={styles.infoBelow}>
                <Box className={styles.flex}>
                  <Box className={styles.title}>Description</Box>
                  <Link className={styles.addNow}>Edit Description</Link>
                </Box>
                <Box className={styles.flex}>
                  <Box className={styles.title}>Languages</Box>
                  <Link className={styles.addNow}>Add New</Link>
                </Box>
                <Box className={styles.eng}>
                  English -<label className={styles.basic}>Basic</label>
                </Box>
                <Box className={styles.linked}>
                  <Box className={styles.title}>Linked Accounts</Box>
                  <Link className={styles.face}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    <label className={styles.faceText}>Facebook</label>
                  </Link>
                  <Link className={styles.google}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 20 20"
                      height="20px"
                      viewBox="0 0 20 20"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <g>
                        <rect fill="none" height="20" width="20" x="0" />
                      </g>
                      <g>
                        <g>
                          <path d="M15.98,9L12.5,3h-5l4.59,7.92C13,9.77,14.39,9.01,15.98,9z" />
                          <path d="M11.25,12.5H8.84L6.23,17h5.79C11.39,16.16,11,15.13,11,14C11,13.47,11.1,12.98,11.25,12.5z" />
                          <polygon points="6.63,4.5 2,12.5 4.5,17 9.19,8.91" />
                          <polygon points="16.75,13.25 16.75,11 15.25,11 15.25,13.25 13,13.25 13,14.75 15.25,14.75 15.25,17 15.5,17 16.75,17 16.75,14.75 19,14.75 19,13.25" />
                        </g>
                      </g>
                    </svg>
                    <label className={styles.Text}>Google</label>
                  </Link>
                  <Link className={styles.dri}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    <label className={styles.Text}>Dribbble</label>
                  </Link>
                  <Link className={styles.stac}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    <label className={styles.Text}>Stack Overflow</label>
                  </Link>
                  <Link className={styles.git}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    <label className={styles.Text}>GitHub</label>
                  </Link>
                  <Link className={styles.vimeo}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    <label className={styles.Text}>Vimeo</label>
                  </Link>
                  <Link className={styles.twitter}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    <label className={styles.Text}>Vimeo</label>
                  </Link>
                </Box>
                <Box className={styles.flex}>
                  <Box className={styles.title}>Skills</Box>
                  <Link className={styles.addNow}>Add New</Link>
                </Box>
                <Box className={styles.eng}>
                  <label className={styles.placehoder}>Add your Skills</label>
                </Box>
                <Box className={styles.flex}>
                  <Box className={styles.title}>Education</Box>
                  <Link className={styles.addNow}>Add New</Link>
                </Box>
                <Box className={styles.eng}>
                  <label className={styles.placehoder}>
                    Add your Education{" "}
                  </label>
                </Box>
                <Box className={styles.flex}>
                  <Box className={styles.title}>Certifcation</Box>
                  <Link className={styles.addNow}>Add New</Link>
                </Box>
                <Box className={styles.eng}>
                  <label className={styles.placehoder}>
                    Add your Certification{" "}
                  </label>
                </Box>
              </Box>
            </Grid>
            <Grid xs={8} className={styles.contentRight}>
              <Box className={styles.buyServices}>
                <Box className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 20 20"
                    height="40px"
                    viewBox="0 0 20 20"
                    width="40px"
                    fill="#e8eaed"
                  >
                    <g>
                      <rect fill="none" height="20" width="20" x="0" />
                    </g>
                    <g>
                      <path d="M14,9V4H7v3H3v9h7v-3h1v3h6V9H14z M6,14H5v-1h1V14z M6,12H5v-1h1V12z M6,10H5V9h1V10z M10,11H9v-1h1V11z M10,9H9V8h1V9z M10,7H9V6h1V7z M12,11h-1v-1h1V11z M12,9h-1V8h1V9z M12,7h-1V6h1V7z M15,14h-1v-1h1V14z M15,12h-1v-1h1V12z" />
                    </g>
                  </svg>
                </Box>
                <Box className={styles.text}>
                  <Box className={styles.buy}>
                    <label className={styles.boldText}>
                      Buying services for work?
                    </label>
                    <label className={styles.text}>
                      Help us tallor your experlence to fit your needs.
                    </label>
                    <Box className={styles.tellUs}>
                      {" "}
                      Tell us more about your business{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 20 20"
                        width="20px"
                        fill="#e8eaed"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </Box>
                    <svg
                      className={styles.close}
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 24 24"
                      width="20px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.createGigs}>
                <Box className={styles.text}>
                  It seems that you don't have any active Gigs. Get selling!
                </Box>
                <Button className={styles.buttonGig}>Create a New Gig</Button>
              </Box>
              <Box className={styles.hiredJob}>
                {isLoading ? (
                  <p>Loading hired jobs...</p>
                ) : error ? (
                  <p>Error loading hired jobs: {error.message}</p>
                ) : hiredJobs && hiredJobs.length > 0 ? (
                  hiredJobs.map(
                    (job: {
                      id: Key | null | undefined;
                      congViec: {
                        id: any;
                        hinhAnh: any;
                        tenCongViec:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined;
                        moTa:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | ReactPortal
                          | null
                          | undefined;
                      };
                    }) => (
                      <Box key={job.id} className={styles.borderTop}>
                        <Box className={styles.hiredLeft}>
                          <img
                            src={
                              job.congViec.hinhAnh || "./src/assets/crs6.png"
                            }
                            alt={job.congViec.tenCongViec?.toString() || ""}
                          />
                        </Box>
                        <Box className={styles.hiredRight}>
                          <Box className={styles.title}>
                            {job.congViec.tenCongViec}
                          </Box>
                          <Box className={styles.text}>{job.congViec.moTa}</Box>
                          <Box className={styles.buttons}>
                            <Button
                              onClick={() =>
                                navigate(`/job-detail/${job.congViec.id}`)
                              }
                              className={styles.buttonDetail}
                            >
                              View detail
                            </Button>
                            <Button
                              className={styles.button}
                              onClick={() => handleDeleteHiredJob(job.id)}
                            >
                              X
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    )
                  )
                ) : (
                  <p>No hired jobs found.</p>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
