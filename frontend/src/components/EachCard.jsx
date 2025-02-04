import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { addCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

export default function EachCard({ item }) {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    dispatch(
      addCart({
        id: item.id,
        title: item.title,
        time: item.time,
        content: item.content,
        shopOwner: item.shopOwner,
        file: item.file,
        quantity: quantity,
      })
    );
  };

  return (
    <Card
      sx={{
        width: 400,
        border: "none",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
        cursor: "pointer",
      }}
      onClick={handleAddToCart}
    >
      <CardMedia
        sx={{ height: 250, objectFit: "cover", width: "100%" }}
        image={item.file || "/default-image.jpg"}
        title={item.title || "Product Image"}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "16px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {item.title || "Product Title"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          {item.time ? `${item.time} Min's` : "N/A"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {item.content || "No description available."}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {item.shopOwner || "No description available."}
        </Typography>
        <TextField
          type="number"
          label="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          sx={{ width: "100px" }}
        />
      </CardContent>
    </Card>
  );
}
