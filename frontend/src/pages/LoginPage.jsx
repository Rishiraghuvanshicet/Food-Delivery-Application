import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const image =
  "https://images.unsplash.com/photo-1600728619239-d2a73f7aa541?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image2 =
  "https://images.unsplash.com/photo-1736843638345-50dbc62012d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const LoginPage = () => {
  const [userDetail, setUserDetail] = useState({
    role: "",
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  function onHandleChange(e) {
    const { name, value } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleToggle() {
    navigate("/register");
  }

  async function onHandleLogin(e) {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/userLogin",
        userDetail
      );
      console.log(response.data.data);
      if (response.data.data.role == "admin") {
        toast.success("Successfully logged in");
        navigate("/adminpage");
      } else {
        toast.success("Successfully logged in");
        setTimeout(() => navigate("/homepage"), 1000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error(error.message);
    }
    // Clear the form
    setUserDetail({
      role: "",
      userName: "",
      password: "",
    });
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Toaster />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
          boxShadow: 3,
          padding: "20px",
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          border: "13px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fbc02d",
            padding: "10px",
            width: "100%",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: "Times New Roman" }}>
            Food-Delivery-App
          </Typography>
        </Box>
        <img
          src={image}
          alt="app-logo"
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "20px",
          }}
        />
        <form onSubmit={onHandleLogin} style={{ width: "100%" }}>
          <TextField
            label="User Name"
            name="userName"
            value={userDetail.userName}
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={onHandleChange}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={userDetail.password}
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={onHandleChange}
          />
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Role</InputLabel>
            <Select
              label="Role"
              name="role"
              value={userDetail.role}
              onChange={onHandleChange}
              fullWidth
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="customer">Customer</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit" // Set type to submit
            variant="contained"
            sx={{
              backgroundColor: "#ffeb3b",
              "&:hover": {
                backgroundColor: "#fbc02d",
              },
              fontFamily: "Time new roman",
              marginBottom: 2,
            }}
            color="#ffea00"
            fullWidth
          >
            Login
          </Button>
        </form>
        <Typography sx={{ fontFamily: "Time new roman" }}>OR</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffeb3b",
            "&:hover": {
              backgroundColor: "#fbc02d",
            },
            marginTop: 2,
            fontFamily: "Time new roman",
          }}
          color="#ffeb3b"
          fullWidth
          onClick={handleToggle}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
