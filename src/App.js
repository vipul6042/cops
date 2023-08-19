import React, { useState } from "react";
import "./App.css"; // Add your styles if needed
import Sidebar from "./copmonents/sidebar";
import ItemsDisplay from "./copmonents/itemDesplay";

const App = () => {
  const [selectedItem, setSelectedItem] = useState("Mobile"); 

  return (
    <div className="app">
      <Sidebar selectedItem={selectedItem} onItemSelect={setSelectedItem} />
      <div className="display">        
        <h1 className="header">Shopping</h1>
        <ItemsDisplay selectedItem={selectedItem}/>
      </div>
    </div>
  );
};

export default App;
