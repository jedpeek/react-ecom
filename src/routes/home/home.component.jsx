import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import { Hero } from "../../components/Banner/banner";

const Home = () => {
  return (
    <div>
      <Hero />
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
