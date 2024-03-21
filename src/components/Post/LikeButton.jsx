/* eslint-disable react/prop-types */
import { Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useEffect } from "react";
import { BlogContext } from "../../contexts/Context";

const LikeButton = ({ handleLike, postId }) => {
  const { posts } = useContext(BlogContext);
  const isLikedPost = posts.find((post) => post.id === postId).isLiked;
  return (
    <Tooltip
      title={isLikedPost ? "Unlike" : "Like"}
      onClick={() => handleLike(postId)}
    >
      <FavoriteIcon
        sx={{
          color: isLikedPost ? "red" : "grey",
          cursor: "pointer",
        }}
      />
    </Tooltip>
  );
};

export default LikeButton;
