import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

// import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import {
//   ProductCartContainer,
//   Footer,
//   Name,
//   Price,
// } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    // <ProductCartContainer>
    //   <img src={imageUrl} alt={`${name}`} />
    //   <Footer>
    //     <Name>{name}</Name>
    //     <Price>{price}</Price>
    //   </Footer>
    //   <Button
    //     buttonType={BUTTON_TYPE_CLASSES.inverted}
    //     onClick={addProductToCart}
    //   >
    //     Add to Cart
    //   </Button>
    // </ProductCartContainer>
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a class="block relative h-48 rounded overflow-hidden">
        <img
          alt={name}
          class="object-cover object-center w-full h-full block"
          src={imageUrl}
        />
      </a>
      <div class="mt-4 flex justify-between m-2">
        <h2 class="text-gray-900 title-font text-lg font-medium flex">
          {name}
        </h2>
        <p class="mt-1 ml-2 text-2xl">$ {price}</p>
      </div>
      <button
        class=" max-width text-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded"
        onClick={addProductToCart}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
