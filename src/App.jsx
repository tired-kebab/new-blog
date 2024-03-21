import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import { useState } from "react";
import { BlogContext } from "./contexts/Context";
function App() {
  const [blogContent, setBlogContent] = useState({});
  const initialPosts = JSON.parse(localStorage.getItem("posts")) || [];
  const [posts, setPosts] = useState(initialPosts); // I'm storing my post in this array
  const [isModal, setIsModal] = useState(false);
  const [editedPostId, setEditedPostId] = useState();
  console.log("posts", posts);
  // const initialLikedPosts = JSON.parse(
  //   JSON.stringify(localStorage.getItem("likedPosts"))
  // );

  return (
    <>
      <BlogContext.Provider
        value={{
          blogContent,
          setBlogContent,
          posts,
          setPosts,
          isModal,
          setIsModal,
          editedPostId,
          setEditedPostId,
        }}
      >
        <Navbar />
        <Outlet />
      </BlogContext.Provider>
    </>
  );
}

export default App;
