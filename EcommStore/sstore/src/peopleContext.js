/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { peopleArray, getPeopleData } from "./peopleInfo";
// import CartProvider from "./CartContext";
export const peopleContext = createContext({
  items: [],
  getPeopleQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function PeopleProvider({ children }) {
  const [cartpeople, setCartpeople] = useState([]);

  // will give quantity by id ie: id: 1, quantity: 2

  function getPeopleQuantity(id) {
    const quantity = cartpeople.find(
      (people) => people.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getPeopleQuantity(id);

    if (quantity === 0) {
      // product not in cart
      setCartpeople([
        ...cartpeople,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product in cart

      setCartpeople(
        cartpeople.map((people) =>
            people.id === id
            ? { ...people, quantity: people.quantity + 1 }
            : people
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getPeopleQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartpeople(
        cartpeople.map((people) =>
            people.id === id
            ? { ...people, quantity: people.quantity - 1 }
            : people
        )
      );
    }
  }

  function deleteFromCart(id) {
    // if the object meets the condition add to array

    setCartpeople((cartpeople) =>
      cartpeople.filter((currentPeople) => {
        return currentPeople.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartpeople.map((cartItem) => {
      const peopleData = getPeopleData(cartItem.id);
      totalCost += peopleData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartpeople,
    getPeopleQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  return (
    <peopleContext.Provider value={contextValue}>{children}</peopleContext.Provider>
  );
}

export default PeopleProvider;
