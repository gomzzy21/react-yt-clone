import { Stack,Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} /> 
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white",mt: 1,ml:4,pl:2,pt:2 }}>
           Welcome  <span ><a href="https://www.instagram.com/react_gomzzz/?hl=en" style={{ color: "#FC1503" }}>React_gomzzz</a></span>-YT-Clone
        </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
