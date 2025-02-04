import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Avatar, Divider, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const EditProfile = () => {
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formValues);
    navigate('/editprofile'); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f6f8',
      }}
    >
      <Navbar />
      <Paper
        sx={{
          width: '100%',
          maxWidth: 800, 
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar sx={{ width: 80, height: 80, marginBottom: 2 }} />
        </Box>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Edit Profile
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />

        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={3} direction="column" justifyContent="space-between" alignItems="center">
            <Grid2 item xs={4}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
              />
            </Grid2>

            {/* Email Field */}
            <Grid2 item xs={4}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                type="email"
              />
            </Grid2>

            {/* Password Field */}
            <Grid2 item xs={4}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
                type="password"
              />
            </Grid2>

            {/* Submit Button */}
            <Grid2 item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  padding: '12px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#1976d2',
                  },
                }}
              >
                Save Changes
              </Button>
            </Grid2>
          </Grid2>
        </form>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button onClick={() => navigate('/homepage')} sx={{ textDecoration: 'none', color: 'blue' }}>
            Go Back to Home Page
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditProfile;
