import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <hr className="w-full h-1 mx-auto rounded  dark:bg-black" />

      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
      {/* 
      <div className="w-full mx-auto rounded  ">
        <Link to={`/shop/${title}`} className="uppercase">
          MORE {title}
        </Link>
      </div> */}
    </>
  );
};

export default CategoryPreview;
