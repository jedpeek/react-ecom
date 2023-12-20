import "./checkout.styles.scss";

import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((item) => {
          // const { id, name, quantity } = item;
          return (
            <CheckoutItem key={item.id} cartItem={item} />
            // <div key={id}>
            //   <h2>{name}</h2>
            //   <span>{quantity}</span>
            //   <span onClick={() => removeItemFromCart(item)}>Decrement</span>
            //   <span onClick={() => addItemToCart(item)}>Increment</span>
            // </div>
          );
        })}
      </div>
      <span className="total">Total: $ {cartTotal}</span>
    </div>
  );
}

export default Checkout;
