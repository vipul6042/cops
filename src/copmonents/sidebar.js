import React, { Component } from "react";
const sidebar = ({ selectedItem, onSelectitem }) => {
  const itmes = ["Mobile", "Laptops", "Mens Wear", "Womens Wear"];
};
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <b>Category</b>
        {items.map((item) => (
          <div>
            key={item}
            className={item}
            onClick={() => onSelectitem(item)}
          </div>
        ))}
      </div>
    );
  }
}
