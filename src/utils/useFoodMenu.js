import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useFoodMenu = (resId) => {
  const [myResInfo, setMyResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setMyResInfo(json.data);
  };

  return myResInfo;
};

export default useFoodMenu;
