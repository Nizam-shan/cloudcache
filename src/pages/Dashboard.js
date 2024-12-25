import React, { useState, useEffect } from "react";
import {
  Grid2,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Box,
  Paper,
} from "@mui/material";
import { fetchPosts } from "../services/api";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // created api file for services
    fetchPosts().then((data) => {
      setPosts(data.slice(0, 10));
      setLoading(false);
    });

    const fetchImages = async () => {
      const imageUrls = [];
      for (let i = 0; i < 10; i++) {
        // it will loop 10 times
        const randomImage = `https://picsum.photos/400/300?random=${i}`;
        imageUrls.push(randomImage);
      }
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          backgroundImage: `url('https://picsum.photos/1600/600')`,
          backgroundSize: "cover",
          color: "#fff",
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to CloudeCache Dashboard
        </Typography>
        <Typography variant="h6">
          "The future is stored in cloud were becomes resources for living"
        </Typography>
      </Paper>

      <Grid2 container spacing={3} sx={{ mb: 4 }}>
        <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography variant="h4" color="primary" gutterBottom>
              {posts?.length}
            </Typography>
            <Typography>Posts Loaded</Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography variant="h4" color="secondary" gutterBottom>
              {images?.length}
            </Typography>
            <Typography>Random Images</Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography variant="h4" color="success" gutterBottom>
              100%
            </Typography>
            <Typography>Responsiveness</Typography>
          </Paper>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={3} sx={{ padding: 3 }}>
        {posts &&
          posts?.map((post, index) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={post.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: 3,
                  borderRadius: "8px",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "scale(1.03)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={images[index]}
                    alt="Random Image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {post?.title
                        ? post.title.charAt(0).toUpperCase() +
                          post.title.slice(1)
                        : ""}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {post?.body?.length > 100
                        ? `${post?.body?.substring(0, 100)}...`
                        : post?.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
      </Grid2>

      <Box
        sx={{
          padding: 3,
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          mt: 4,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} CloudeCache. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
