import { Typography, Box } from "@mui/material";
import React from "react";

const bannerImage =
  "https://static.vecteezy.com/system/resources/thumbnails/002/076/168/small/food-delivery-banner-design-flat-design-online-order-vector.jpg";

export default function Banner() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "80vh", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white", 
        textAlign: "center", 
      }}
    >
      <Typography
        variant="h1"
        sx={{
          zIndex: 2,
          fontWeight: "bold", 
          fontSize: "3rem", 
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          borderRadius:'30%'
        }}
      >
        Order Your Food!!!
      </Typography>
    </Box>
  );
}
