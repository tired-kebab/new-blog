/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { BlogContext } from "../../contexts/Context";
import Typography from "@mui/material/Typography";
import { Box, Card, Button } from "@mui/material";
import Modal from "../Modal/Modal";
import LikeButton from "./LikeButton";

const index = () => {
  const { posts, setPosts, isModal, setIsModal, setEditedPostId } =
    useContext(BlogContext);
  // const [isEditing, setIsEditing] = useState(false);

  const handleLike = (postId) => {
    const likedPosts = posts.map((post) =>
      post.id === postId ? { ...post, isLiked: !post.isLiked } : post
    );
    setPosts(likedPosts);
    localStorage.setItem("posts", JSON.stringify(likedPosts));
  };

  const handleEdit = (postId) => {
    setIsModal(true);
    setEditedPostId(postId);
  };

  const handleDelete = (postId) => {
    const remainingPosts = posts.filter((post) => post?.id !== postId);
    setPosts(remainingPosts);
    localStorage.setItem("posts", JSON.stringify(remainingPosts));
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
            <LikeButton handleLike={handleLike} postId={post?.id} />
            <Button
              variant="text"
              color="primary"
              onClick={() => handleEdit(post.id)}
            >
              Edit
            </Button>
            <Button
              variant="text"
              color="primary"
              onClick={() => handleDelete(post?.id)}
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
