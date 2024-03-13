import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import { BlogContext } from "../../contexts/Context";
import Title from "./Title";
import Description from "./Description";
// import { nanoid } from "nanoid";

const Index = () => {
  // const nanoId = nanoid();
  const { blogContent, setBlogContent, posts, setPosts, setIsModal } =
    useContext(BlogContext);

  const handleInput = (event, key) => {
    setBlogContent({ ...blogContent, [key]: event.target.value });
    // console.log(key);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...blogContent }]); // when I submit my post, it gets updated here
    setIsModal(false);
    // setBlogContent({});
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          margin: 4,
        }}
      >
        <Typography variant="h2" color="initial" sx={{ alignSelf: "center" }}>
          What&apos;s on your mind?
        </Typography>
        {/* <TextField
          id="slug"
          label="slug"
          value={blogContent?.slug}
          onChange={(e) => handleInput(e, "slug")}
        /> */}
        <Title handleInput={handleInput} />
        <Description handleInput={handleInput} />
      </Box>
    </form>
  );
};

export default Index;
