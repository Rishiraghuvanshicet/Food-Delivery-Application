import React, { useState } from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Box, Button, TextField } from "@mui/material";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleBtnClick = () => {
    setInput("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        width: "100%", 
        marginTop: "130px",
        borderRadius: "100px",
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid black",
          borderRadius: "50px",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <TextField
          type="text"
          variant="outlined"
          value={input}
          onChange={handleInputChange}
          size="small"
          sx={{
            borderRadius: "50px",
            width: { xs: "200px", sm: "300px" }, // Responsive width
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
            },
            "& .MuiInputBase-input": {
              padding: "10px",
            },
          }}
        />
        <Button
          onClick={handleBtnClick}
          variant="contained"
          sx={{
            borderRadius: "50%",
            padding: "10px",
            backgroundColor: "#FF9800",
            "&:hover": {
              backgroundColor: "#FF5722",
            },
          }}
        >
          <SearchTwoToneIcon />
        </Button>
      </Box>
    </Box>
  );
};