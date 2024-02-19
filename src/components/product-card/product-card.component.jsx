import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";
import { downloadFromFirebase } from "../../utils/firebase/firebase.utils";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, fileName } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
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
        {price === 0 ? (
          <p class="mt-1 ml-2 text-2xl">Free</p>
        ) : (
          <p class="mt-1 ml-2 text-2xl">$ {price}</p>
        )}
      </div>
      {price === 0 ? (
        <button
          class=" max-width text-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded"
          onClick={() => downloadFromFirebase(fileName)}
        >
          Download Now
        </button>
      ) : (
        <button
          class=" max-width text-black border-2 border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded"
          onClick={addProductToCart}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
};

export default ProductCard;
