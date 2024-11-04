import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { allFavorites, removeFavorite } from "../utilities";
import Cards from "../components/Cards";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(()=>{
        const favorites= allFavorites();
        setCoffees(favorites);
    },[])
    const handleRemove = id=>{
        removeFavorite(id)
        const favorites= allFavorites();
        setCoffees(favorites);
    }
  return (
    <>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={"Manage coffees that you have previously added as favorite. You can view or remove them from here"}
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {
        coffees.map(coffee=> <Cards key={coffee.id} coffee={coffee} handleRemove=
            {handleRemove}></Cards>)
      }
      </div>
      
    </>
  );
};

export default Dashboard;
