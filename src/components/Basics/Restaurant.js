import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(
  Menu.map((item) => {
    return item.category;
  })
),"All"];

console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
    
      <h2 className="title">Welcome to Restaurant</h2>
  
      <Navbar filterItem = {filterItem} menuList= {menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
