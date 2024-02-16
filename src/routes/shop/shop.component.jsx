import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import "./shop.styles.scss";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
