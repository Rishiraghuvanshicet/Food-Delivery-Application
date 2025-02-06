import * as React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";
import { Box, Button, Typography } from "@mui/material";
import { CartCard } from "../components/CartCard";
import Navbar from "../components/NavBar";

const CartPage = () => {
  const cart = useSelector(selectCart);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <h2 style={{ marginTop: "150px", textAlign: "center" }}>Cart</h2>
      
      {cart.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", marginTop: "30px" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "16px", // Space between the cards
            justifyContent: "center",
            marginTop: "20px",
            paddingBottom: "80px", // Padding to accommodate the footer
          }}
        >
          {cart.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </Box>
      )}

      {/* Footer showing total price */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#f1f1f1",
          padding: "16px",
          boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          Checkout
        </Button>
      </Box>
    </div>
  );
};

export default CartPage;
