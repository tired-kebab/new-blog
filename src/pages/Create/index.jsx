import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import { BlogContext } from "../../contexts/Context";
import Title from "./Title";
import Description from "./Description";

const Index = () => {
  const {
    blogContent,
    setBlogContent,
    posts,
    setPosts,
    setIsModal,
    isModal,
    editedPostId,
  } = useContext(BlogContext);

  const handleInput = (event, key) => {
    // This blog content is nothing but a single Post object.
    setBlogContent({ ...blogContent, [key]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // when I update my post, it gets updated here
    if (isModal) {
      // setPosts([...posts, { ...blogContent, id: editedPostId }]);
      setPosts(
        posts.map((post) =>
          post.id === editedPostId ? { ...post, ...blogContent } : post
        )
      );
      setIsModal(false);
    } else {
      // when I submit my post, it gets updated here
      setPosts([
        ...posts,
        {
          ...blogContent,
          id: Date.now(),
          isLiked: false,
          createdAt: new Date(),
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("blogContent", JSON.stringify(blogContent));
  }, [blogContent]);

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
