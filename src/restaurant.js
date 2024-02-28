/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (foods) => {
  const objectFetch = {
    fetchMenu: () => foods,
    consumption: [],
    order: (item) => {
      let items = [];
      items = items.concat(Object.keys(foods.food));
      items = items.concat(Object.keys(foods.drinks));
      if (items.includes(item)) {
        objectFetch.consumption.push(item);
      } else {
        return 'Item indisponível';
      }
    },
    pay: () => {
      let sum = 0;
      for (let indexItem = 0; indexItem < objectFetch.consumption.length; indexItem += 1) {
        const item = objectFetch.consumption[indexItem];
        let itemPrice = foods.food[item];
        if (!itemPrice) {
          itemPrice = foods.drinks[item];
        }
        sum += itemPrice;
      }
      return Number((sum * 1.10).toFixed(2));
    },
  };
  return objectFetch;
};

module.exports = createMenu;
