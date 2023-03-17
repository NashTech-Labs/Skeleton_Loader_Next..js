import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import styles from "./SkeletonLoader.module.css";

function SkeletonLoader() {
  const [loading, setLoading] = useState(false);
  let content = null;

  const handleClick = () => {
    setLoading(!loading);
  };

  if (loading) {
    content = (
      <Grid container justifyContent="center">
        <Grid item lg={4}>
          <Card className={styles.card}>
            <CardContent sx={{ padding: "0px" }}>
              <Box className={styles.box} mb={2}>
                <Typography variant="h5" className={styles["card-title"]}>
                  <Skeleton variant="rounded" width={250} height={35} />
                </Typography>
                <Skeleton variant="rounded" width={100} height={35} />
              </Box>
              <Divider sx={{ margin: "0px -20px 25px -20px" }} />
              <Box>
                <Typography variant="body2" mb={2}>
                  <Skeleton variant="rounded" height={15} />
                </Typography>
                <Typography variant="body2" mb={2}>
                  <Skeleton variant="rounded" height={15} />
                </Typography>
                <Typography variant="body2" mb={2}>
                  <Skeleton variant="rounded" height={15} />
                </Typography>
                <Typography variant="body2" mb={2}>
                  <Skeleton variant="rounded" height={15} />
                </Typography>
              </Box>
              <Box className={styles.box} mt={4}>
                <Skeleton variant="rounded" width={100} height={40} />
                <Skeleton variant="rounded" width={100} height={40} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  } else {
    content = (
      <Grid container justifyContent="center">
        <Grid item lg={4}>
          <Card className={styles.card}>
            <CardContent sx={{ padding: "0px" }}>
              <Box className={styles.box} mb={2}>
                <Typography variant="h5" className={styles["card-title"]}>
                  Professional Communication
                </Typography>
                <Chip label="Scheduled" className={styles.chip} />
              </Box>
              <Divider sx={{ margin: "0px -20px 25px -20px" }} />
              <Box>
                <Typography variant="body2" mb={1}>
                  <strong>Description : </strong>Professional communication is a
                  specialty subfield of communication that pays close attention
                  to the theories and practice of communication within
                  professional contexts.{" "}
                </Typography>
                <Typography variant="body2" mb={1}>
                  <strong>Venue : </strong>Elligent Hall NewYork{" "}
                </Typography>
                <Typography variant="body2" mb={1}>
                  <strong>Date : </strong>25th March 2023{" "}
                </Typography>
                <Typography variant="body2" mb={1}>
                  <strong>Presented By : </strong>Saurabh Kumar Choudhary{" "}
                </Typography>
              </Box>
              <Box className={styles.box} mt={4}>
                <Button variant="outlined" className={styles.btn}>
                  Cancel
                </Button>
                <Button variant="contained" className={styles.btn}>
                  Attend
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
  return (
    <>
      <Box className={styles.container}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Skeleton Loader Next.js
        </Typography>
        <Button
          variant="contained"
          className={styles.btn}
          onClick={handleClick}
          sx={{ my: 3 }}
        >
          See loading
        </Button>
      </Box>
      {content}
    </>
  );
}

export default SkeletonLoader;
