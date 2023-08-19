import React, { Component } from "react";
const Sidebar= ({ selectedItem, onSelectitem }) => {
  const items = ["Mobile", "Laptops", "Mens Wear", "Womens Wear"];
    return (
      <div className="sidebar">
      <p><b>Sports</b></p>
      {items.map((item) => (
        <div
          key={item}
          className={`icon ${item}${selectedItem === item ? ' active' : ''}`}
          onClick={() => onItemSelect(item)}
        ></div>
      ))}
    </div>
    );
  }

  export default Sidebar;
