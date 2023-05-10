import React, { useEffect, useState } from "react";
import "./style.css";
import menuItem from "./menuApi.js";
import Menu from "./Menu.js";
import Navbar from "./Navbar.js";
import UserApi from "./UserApi";

const uniqueList = [
  ...new Set(
    menuItem.map((item) => {
      return item.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(menuItem);
  const [menuList, setMenuList] = useState(uniqueList);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/codrrk08")
      .then((response) => response.json())
      .then(setUserData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(menuItem);
      return;
    }

    const updatedItems = menuItem.filter((item) => {
      return item.category === category;
    });

    setMenuData(updatedItems);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!userData) return null;
  return (
    <>
      <UserApi
        name={userData.name}
        location={userData.location}
        avatar={userData.avatar_url}
      />
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Menu menuData={menuData} />
    </>
  );
};

export default Restaurant;
