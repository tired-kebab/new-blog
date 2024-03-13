import BookIcon from "@mui/icons-material/Book";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "greenyellow",
        height: "5rem",
        boxShadow: "5px 10px 10px lightgrey",
      }}
    >
      <BookIcon />
      <Link to="/">
        <Button variant="text" color="inherit">
          Home
        </Button>
      </Link>
      <Link to="create">
        <Button variant="text" color="inherit">
          Create
        </Button>
      </Link>
      <Link to="about">
        <Button variant="text" color="inherit">
          About
        </Button>
      </Link>
    </Box>
  );
};

export default index;
