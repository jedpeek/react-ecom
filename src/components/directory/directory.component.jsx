import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Serum",
    imageUrl: "/serum_01.jpg",
    route: "shop/serum%20presets",
  },
  {
    id: 2,
    title: "Drum Samples",
    imageUrl: "/drums_01.jpg",
    route: "shop/drum%20samples",
  },
  {
    id: 3,
    title: "Ambient Tracks",
    imageUrl: "/ambient_01.jpg",
    route: "shop/ambient%20tracks",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
