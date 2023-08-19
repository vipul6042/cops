import React from "react";

const ItemsDisplay=({selectedItem})=>{
    const products=[
        {
            item:'mobile',
            price:"9999",
            name:"redmi note 10",
            quantity:"0"
        },
        {
            item:'mobile',
            price:"9999",
            name:"redmi note 10",
            quantity:"0"
        },
        {
            item:'mobile',
            price:"9999",
            name:"redmi note 10",
            quantity:"0"
        },

    ];

    const filteredProduct=products.filter(
        (product)=>product.item===selectedItem
    );
    return(
        <div className="itemDisplay">
            <h2 className="header">
                {selectedItem}
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProduct.map((item, index) => (
              <tr key={index}>
              
                <td >{index + 1}</td>
                <td>{`Product:${item.name}`}</td>
                <td>{`Price: ${item.price}`}</td>
              <td>{`Cart: ${item.quantity}`}</td>
              </tr>
            ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemsDisplay;