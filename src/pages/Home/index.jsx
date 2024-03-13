import Typography from "@mui/material/Typography";
import Post from "../../components/Post/index";
const index = () => {
  return (
    <div>
      <Typography variant="h3" color="initial">
        Your updates:
        <Post />
      </Typography>
    </div>
  );
};

export default index;
