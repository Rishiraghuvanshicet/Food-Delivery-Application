import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const image =
  "https://images.unsplash.com/photo-1600728619239-d2a73f7aa541?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image2 =
  "https://images.unsplash.com/photo-1736843638345-50dbc62012d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const UPLOAD_PRESET = "Food_delivery_app";
const CLOUD_NAME = "dyc1msjrl";

const RegisterPage = () => {
  const [userDetail, setUserDetail] = useState({
    email: "",
    role: "",
    userName: "",
    password: "",
    file: null,
  });

  const navigate = useNavigate(); // Initialize useNavigate

  function onHandleChange(e) {
    const { name, value, files } = e.target;

    if (name === "file" && files) {
      setUserDetail((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setUserDetail((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  async function onHandleSubmit(e) {
    e.preventDefault();

    if (
      !userDetail.email ||
      !userDetail.password ||
      !userDetail.userName ||
      !userDetail.role
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const formData = new FormData();
    if (userDetail.file) {
      formData.append("file", userDetail.file);
    }
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);

    try {
      const imageUploadResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const imageUrl = imageUploadResponse.data.secure_url;

      const userWithImage = { ...userDetail, file: imageUrl };
      const response = await axios.post(
        "http://localhost:5000/api/user/userRegister",
        userWithImage
      );
      setTimeout(()=> navigate("/") ,1000);
      toast.success("Successfully registered");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  }

  function onHandleClear() {
    setUserDetail({
      email: "",
      password: "",
      userName: "",
      role: "",
      file: null,
    });
    navigate("/"); 
  }

  return (
    <Box
      sx={{
        height: "120vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
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
          overflow: "hidden",
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

        <form onSubmit={onHandleSubmit} style={{ width: "100%" }}>
          <img
            src={image}
            alt="app-logo"
            style={{
              width: "100%",
              height: "auto",
              marginBottom: "20px",
            }}
          />
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
            name="password"
            value={userDetail.password}
            type="password"
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={onHandleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={userDetail.email}
            type="email"
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
          <Box sx={{display:'flex', justifyContent:'center'}}>
          <Button
            variant="contained"
            component="label"
            sx={{
              backgroundColor: "#ffea00",
              "&:hover": {
                backgroundColor: "#fbc02d",
              },
              fontFamily: "Times New Roman",
              color: "black",
              padding: "10px 20px",
              textTransform: "none",
              marginBottom: 2,
              gap:'20px'
            }}
          >
            <AddAPhotoIcon/> Add your Profile Pic
            <input
              name="file"
              type="file"
              hidden
              accept="image/*"
              onChange={onHandleChange}
            />
          </Button>

          </Box>
          
          {userDetail.file && (
            <Box sx={{ marginTop: 2, textAlign: "center" }}>
              <Typography
                variant="body2"
                sx={{ marginBottom: 1, fontFamily: "Times New Roman" }}
              >
                Selected Image:
              </Typography>
              <img
                src={URL.createObjectURL(userDetail.file)}
                alt="profile"
                style={{
                  width: "100%",
                  maxWidth: "150px",
                  height: "auto",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffeb3b",
              "&:hover": {
                backgroundColor: "#fbc02d",
              },
              fontFamily: "Times New Roman",
              marginBottom: 2,
            }}
            color="#ffea00"
            fullWidth
            type="submit"
          >
            Register
          </Button>
        </form>

        <Typography sx={{ fontFamily: "Times New Roman" }}>OR</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffeb3b",
            "&:hover": {
              backgroundColor: "#fbc02d",
            },
            marginTop: 2,
            fontFamily: "Times New Roman",
          }}
          color="#ffeb3b"
          fullWidth
          onClick={onHandleClear}
        >
          Have Account
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
