import * as React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";
import Navbar from "../components/NavBar";
import Box from "@mui/material/Box";
import { CartCard } from "../components/CartCard";


const CartPage = () => {
  const cart = useSelector(selectCart);

  return (
    <div>
      <Navbar />
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Stack the cards vertically
            gap: "16px", // Space between cards
            marginTop: "100px", // Margin from top
          }}
        >
          {cart.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </Box>
      )}

     
    </div>
  );
};

export default CartPage;
