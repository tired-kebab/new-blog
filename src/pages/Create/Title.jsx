/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { useContext } from "react";
import { BlogContext } from "../../contexts/Context";

const Title = ({ handleInput }) => {
  const { blogContent } = useContext(BlogContext);
  return (
    <div>
      <TextField
        id="title"
        label="Title"
        value={blogContent?.title}
        onChange={(e) => handleInput(e, "title")}
        multiline
        minRows={2}
        fullWidth
      />
    </div>
  );
};

export default Title;
