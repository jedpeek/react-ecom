import DirectoryItem from "../directory-item/directory-item.component";
import categories from "../directory-item/categories.data.jsx";
import "./directory.styles.scss";
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
