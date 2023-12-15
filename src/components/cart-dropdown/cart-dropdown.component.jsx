import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems />
      {cartItems.length ? (
        cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
      ) : (
        <EmptyMessage>Your Cart is Empty</EmptyMessage>
      )}
      <Link className="" to="/checkout">
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
