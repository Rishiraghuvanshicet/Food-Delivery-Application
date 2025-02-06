import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { removeCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

export const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);

  // Open the dialog when the "Place Order" button is clicked
  const handlePlaceOrder = () => {
    setOpenDialog(true);
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Handle remove item from cart
  const handleRemove = () => {
    dispatch(removeCart({ _id: item._id }));
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
        padding: "16px",
      }}
    >
      <CardMedia
        sx={{ height: 250, objectFit: "cover", width: "100%" }}
        image={item.file || "/default-image.jpg"}
        title={item.title || "Product Image"}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {item.title || "Product Title"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          {item.time ? `${item.time} Min's` : "N/A"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {item.content || "No description available."}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {item.shopOwner || "No shop owner available."}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          Quantity: {item.quantity}
        </Typography>

        {/* Place Order Button */}
        <Box sx={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="success"
            onClick={handlePlaceOrder}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Place Order
          </Button>
        </Box>

        {/* Dialog Box for Order Details (Specific to the item clicked) */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Order Details</DialogTitle>
          <DialogContent>
            <Typography variant="h6" gutterBottom>
              Your Order:
            </Typography>
            <Box>
              <Box key={item._id} sx={{ marginBottom: "10px" }}>
                <Typography variant="body1"><strong>{item.title}</strong></Typography>
                <Typography variant="body2">Quantity: {item.quantity}</Typography>
                <Typography variant="body2">Price: ${item.price}</Typography>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseDialog} color="success">
              Confirm Order
            </Button>
          </DialogActions>
        </Dialog>

        {/* Remove Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleRemove}
            sx={{
              textTransform: "none",
              padding: "6px 12px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
