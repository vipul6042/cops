import React, { useState } from "react";
import "./App.css"; // Add your styles if needed
import Sidebar from "./copmonents/sidebar";


const App = () => {
  const [selectedItem, setSelectedItem] = useState("Mobile"); 

  return (
    <div className="app">
      <Sidebar selectedItem={selectedItem} onSelectItem={setSelectedItem} />
      <div className="display">        
        <h1 className="header">Shopping</h1>
        {/* <MatchDisplay selectedSport={selectedSport} /> */}
      </div>
    </div>
  );
};

export default App;
