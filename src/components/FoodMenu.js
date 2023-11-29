import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const FoodMenu = () => {
  const [myResInfo, setMyResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setMyResInfo(json.data);
  };
  console.log(myResInfo);

  if (myResInfo === null) return <Shimmer />;

  const { name, cuisines } = myResInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    myResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <ul>
        {itemCards.map((resItem) => {
          return <li key={resItem.card.info.id}>{resItem.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FoodMenu;
