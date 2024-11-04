import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desire coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
