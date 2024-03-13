/* eslint-disable react/prop-types */
import { Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect } from "react";

const LikeButton = ({ handleLike, likedPosts, index }) => {
  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);
  return (
    <Tooltip
      title={likedPosts.includes(index) ? "Unlike" : "Like"}
      onClick={() => handleLike(index)}
    >
      <FavoriteIcon
        sx={{
          color: likedPosts.includes(index) ? "red" : "grey",
          cursor: "pointer",
        }}
      />
    </Tooltip>
  );
};

export default LikeButton;
