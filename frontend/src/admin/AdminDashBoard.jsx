import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminDashBoard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        padding: "24px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Admin Dashboard
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#d32f2f", color: "white", fontWeight: "bold" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>


      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "12px",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Total Users
              </Typography>
              <Typography variant="h4">1,234</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#388e3c",
              color: "white",
              borderRadius: "12px",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Total Orders
              </Typography>
              <Typography variant="h4">567</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#f57c00",
              color: "white",
              borderRadius: "12px",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Total Revenue
              </Typography>
              <Typography variant="h4">$12,345</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Content */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Recent Activities
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "16px",
          }}
        >
          <Typography variant="body1">
            - User "JohnDoe" placed a new order.
          </Typography>
          <Typography variant="body1">
            - Product "Burger" was updated.
          </Typography>
          <Typography variant="body1">
            - New user "JaneDoe" registered.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashBoard;