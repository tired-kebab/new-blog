/* eslint-disable react/prop-types */
import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { BlogContext } from "../../contexts/Context";

const Description = ({ handleInput }) => {
  const { blogContent } = useContext(BlogContext);

  return (
    <div>
      <TextField
        id="description"
        label="Write on!"
        value={blogContent?.description}
        onChange={(e) => handleInput(e, "description")}
        multiline
        minRows={8}
        fullWidth
        InputProps={{
          endAdornment: (
            <Button
              type={
                blogContent.title && blogContent.description
                  ? "submit"
                  : "button"
              }
              variant="contained"
              color="primary"
              sx={{ alignSelf: "flex-end" }}
            >
              Post
            </Button>
          ),
        }}
      />
    </div>
  );
};

export default Description;
