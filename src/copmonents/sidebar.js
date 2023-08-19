import React from "react";
const Sidebar= ({ selectedItem, onItemSelect }) => {
  const items = ["Mobile", "Laptops", "Mens Wear", "Womens Wear"];
    return (
      <div className="sidebar">
      <p><b>Category</b></p>
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
