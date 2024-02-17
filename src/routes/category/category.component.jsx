import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    // <Fragment>
    //   <Title>{category.toUpperCase()}</Title>
    //   <CategoryContainer>
    // {products &&
    //   products.map((product) => (
    //     <ProductCard key={product.id} product={product} />
    //   ))}
    //   </CategoryContainer>
    // </Fragment>
    <>
      <Title>{category.toUpperCase()}</Title>
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap -m-4">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
