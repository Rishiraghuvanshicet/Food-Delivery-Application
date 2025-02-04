import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const UPLOAD_PRESET = "Food_delivery_app";
const CLOUD_NAME = "dyc1msjrl";

const AdminPage = () => {
 
  const [foodData, setFoodData] = useState({
    title: "",
    content: "",
    time: "",
    shopOwner: "",
    file: null,
  });


  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/admin/dashboard");
  };


  function onHandleChange(e) {
    const { name, value, files } = e.target;

    if (name === "file" && files) {
      setFoodData((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setFoodData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  async function onHandleSubmit(e) {
    e.preventDefault();

    if (
      !foodData.title ||
      !foodData.content ||
      !foodData.time ||
      !foodData.file ||
      !foodData.shopOwner
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const formData = new FormData();
    formData.append("file", foodData.file); 
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);

    try {
      const imageSaveResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const imageUrl = imageSaveResponse.data.secure_url;

      const foodWithImage = { ...foodData, file: imageUrl };
      const response = await axios.post(
        "http://localhost:5000/api/admin/saveProduct",
        foodWithImage
      );
      toast.success("Successfully Saved");
      onHandleClear(); 
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  }

  function onHandleClear() {
    setFoodData({
      title: "",
      content: "",
      time: "",
      shopOwner: "",
      file: null,
    });
  }


  return (
    <> <Toaster position="top-center" reverseOrder={false} />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#1976d2", color: "white", fontWeight: "bold" }}
        onClick={handleGoToDashboard}
      >
        Go to Dashboard
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
          Admin Panel
        </Typography>
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
            <TextField
              label="Title"
              name="title"
              value={foodData.title}
              fullWidth
              sx={{ marginBottom: 2 }}
              onChange={onHandleChange}
            />
            <TextField
              label="Content"
              name="content"
              value={foodData.content}
              fullWidth
              sx={{ marginBottom: 2 }}
              onChange={onHandleChange}
            />
            <TextField
              label="Shop-Owner"
              name="shopOwner"
              value={foodData.shopOwner}
              fullWidth
              sx={{ marginBottom: 2 }}
              onChange={onHandleChange}
            />
            <TextField
              label="Time"
              name="time"
              value={foodData.time}
              fullWidth
              sx={{ marginBottom: 2 }}
              onChange={onHandleChange}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                  gap: "20px",
                }}
              >
                <AddAPhotoIcon /> Add Food Pic
                <input
                  name="file"
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={onHandleChange}
                />
              </Button>
            </Box>

            {foodData.file && (
              <Box sx={{ marginTop: 2, textAlign: "center" }}>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1, fontFamily: "Times New Roman" }}
                >
                  Selected Image:
                </Typography>
                <img
                  src={URL.createObjectURL(foodData.file)}
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
              fullWidth
              type="submit"
            >
              Save
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default AdminPage;
