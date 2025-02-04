import * as React from "react";
import { Box, Divider, IconButton, Typography, Grid, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffee58",
        padding: "32px 16px",
        borderTop: "1px solid #e0e0e0",
        marginTop:"20px"
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">


        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          <Link href="#" color="text.secondary" underline="hover" display="block">
            Help & Support
          </Link>
          <Link href="#" color="text.secondary" underline="hover" display="block">
            Partner with Us
          </Link>
          <Link href="#" color="text.secondary" underline="hover" display="block">
            Ride with Us
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Legal
          </Typography>
          <Link href="#" color="text.secondary" underline="hover" display="block">
            Terms & Conditions
          </Link>
          <Link href="#" color="text.secondary" underline="hover" display="block">
            Cookie Policy
          </Link>
          <Link href="#" color="text.secondary" underline="hover" display="block">
            Privacy Policy
          </Link>
          <Link href="#" color="text.secondary" underline="hover" display="block">
            Investor Relations
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 2 }}>
            Available in:
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Bangalore, Gurgaon, Hyderabad, Delhi, Mumbai, Pune
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            679 cities
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Food-Delivery-App <br/>© 2025.All rights Reserve 
        </Typography>

        <Box>
          <IconButton
            aria-label="LinkedIn"
            sx={{ color: "text.secondary" }}
            href="https://www.linkedin.com"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            sx={{ color: "text.secondary" }}
            href="https://www.instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label="Facebook"
            sx={{ color: "text.secondary" }}
            href="https://www.facebook.com"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="Pinterest"
            sx={{ color: "text.secondary" }}
            href="https://www.pinterest.com"
            target="_blank"
          >
            <PinterestIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            sx={{ color: "text.secondary" }}
            href="https://www.twitter.com"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}