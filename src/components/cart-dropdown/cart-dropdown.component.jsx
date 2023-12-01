import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}
      <Link className="" to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
}

export default CartDropdown;
