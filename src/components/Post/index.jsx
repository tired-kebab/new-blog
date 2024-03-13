/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { BlogContext } from "../../contexts/Context";
import Typography from "@mui/material/Typography";
import { Box, Card, Button } from "@mui/material";
import Modal from "../Modal/Modal";
import LikeButton from "./LikeButton";

const index = () => {
  const { posts, setPosts, isModal, setIsModal } = useContext(BlogContext);
  const initialLikedPosts =
    JSON.parse(localStorage.getItem("likedPosts")) || [];
  const [likedPosts, setLikedPosts] = useState(initialLikedPosts);
  // const [isEditing, setIsEditing] = useState(false);

  const handleLike = (index) => {
    setLikedPosts((prevLikedPosts) => {
      if (prevLikedPosts.includes(index)) {
        return;
      } else {
        console.log(prevLikedPosts);
        return [...prevLikedPosts, index];
      }
    });
  };

  const handleEdit = () => {
    setIsModal(true);
  };

  const handleDelete = (index) => {
    setPosts((previousPosts) => {
      const remainingPosts = previousPosts.filter((_, i) => i !== index);
      localStorage.setItem("posts", JSON.stringify(remainingPosts));
      // localStorage.setItem("likedPosts", JSON.stringify(initialLikedPosts));
      return remainingPosts;
    });
  };

  return (
    <Box>
      {posts?.map((post, index) => (
        <Card key={index} sx={{ margin: 2, padding: 2 }}>
          {/* <Typography color="initial">Post ID: {post?.slug}</Typography> */}
          <Typography variant="h6" color="initial">
            Title:
          </Typography>
          <Typography variant="h5" color="grey">
            {post?.title}
          </Typography>
          <Typography variant="h6" color="initial">
            Description: {post?.description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LikeButton
              handleLike={handleLike}
              likedPosts={likedPosts}
              index={index}
            />
            <Button
              variant="text"
              color="primary"
              onClick={() => handleEdit(index)}
            >
              Edit
            </Button>
            <Button
              variant="text"
              color="primary"
              onClick={() => handleDelete(index)}
            >
              Delete
            </Button>
          </Box>
        </Card>
      ))}
      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} />}
    </Box>
  );
};

export default index;
