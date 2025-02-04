import { Box ,Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EachCard from "./EachCard";
import axios from "axios";

const CardList = ({ filterItem }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/saveProduct"
        );
        setData(response.data); // Set fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const filteredData = filterItem
    ? data.filter((item) => item.title.toLowerCase() === filterItem.toLowerCase()) 
    : data; 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "40px",
      }}
    >
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <Box key={index}>
            <EachCard item={item} />
          </Box>
        ))
      ) : (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h6">No items available for the selected category</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CardList;
