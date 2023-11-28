import CategoryItem from "../category-item/category-item.component";
import categories from "../category-item/categories.data.jsx";
import "./directory.styles.scss";
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
