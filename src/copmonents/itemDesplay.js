import React from "react";
function increaseQuantity(quantity){
    return quantity++;
}
function decreaseQuantity(quantity){
    return quantity--;
}
const ItemsDisplay = ({ selectedItem }) => {
  const products = [
    {
      item: "Mobile",
      price: "9999",
      name: "redmi note 10",
      quantity: "0",
    },
    {
      item: "Mobile",
      price: "9999",
      name: "redmi note 10",
      quantity: "0",
    },
    {
      item: "Mobile",
      price: "9999",
      name: "redmi note 10",
      quantity: "0",
    },
  ];

  const filteredProduct = products.filter(
    (product) => product.item === selectedItem
  );

  return (
    <div className="itemDisplay">
      <h2 className="header">{selectedItem}</h2>
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
              <td>{index + 1}</td>
              <td>{`Product:${item.name}`}</td>
              <td>{`Price: ${item.price}`}</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-primary">
                    -
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                  >{`Cart: ${item.quantity}`}</button>
                  <button type="button" className="btn btn-primary" onClick={() => increaseQuantity(item.quantity)}>
                    +
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsDisplay;
