import React from "react";

const ItemsDisplay=({selectedItem})=>{
    const products=[];

    const filteredProduct=products.filter(
        (product)=>product.item===selectedItem
    );
    return(
        <div>
            
        </div>
    )
}