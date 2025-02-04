import { useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";
import Navbar from "../components/NavBar";
import EachCard from "../components/EachCard";
import Box from "@mui/material/Box"; // Add this import
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
        <ul>
          {cart.map((item) => (
            <Box key={item.id}> {/* Use Box here */}
              <CartCard item={item} />
            </Box>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
