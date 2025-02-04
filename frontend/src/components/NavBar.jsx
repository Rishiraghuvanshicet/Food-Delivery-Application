import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditProfile = () => {
    navigate("/editprofile");
  };

  const handleLogout = () => {
    navigate("/");
  };
  const goToCartPage = () =>{
    navigate("/homepage/cartPage")
  }

  return (
    <AppBar sx={{ backgroundColor: "yellow", height: "120px" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "30px", color: "#333" }}
        >
          Food Delivery App
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button sx={{ color: "#333", textTransform: "none" }} href="#home">
            Home
          </Button>
          <Button
            sx={{ color: "#333", textTransform: "none" }}
            href="#contactus"
          >
            Contact Us
          </Button>
          <Button sx={{ color: "#333", textTransform: "none" }} href="#aboutus">
            About Us
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton edge="end" sx={{ color: "#333" }} aria-label="cart" onClick={goToCartPage}>
            <ShoppingCartOutlinedIcon  />
          </IconButton>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="profile"
            onClick={handleMenuClick}
          >
            <img
              src={`https://i.pinimg.com/236x/10/69/fe/1069fe7c3f1a07c40b991b250bfc36c5.jpg`}
              alt="icon"
              width={30}
              height={30}
            />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
