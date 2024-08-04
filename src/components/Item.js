import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to toggle the cart state
  const handleCartToggle = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  // Determine className based on whether the item is in the cart
  const liClassName = isInCart ? "in-cart" : "";

  // Determine button text based on cart state
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
