import Order from '../../../models/order';
const initialState = {
  orders: [],
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date(),
      );
      // console.log([newOrder], 'reducersss');
      // console.log(state.orders.concat(newOrder), 'reducersss....2222222');
      return {
        ...state,
        orders: state.orders.concat(newOrder),
        // orders: [newOrder],
      };
  }
  return state;
};

export default order;

// [
//   {
//     id: 1,
//     imageUri:
//       "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2016/09/6-Push-Up-Variations-Youve-Never-Tried.jpg",
//     title: "Push-ups",
//     description:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 2,
//     imageUri:
//       "https://www.muscleandfitness.com/wp-content/uploads/2018/07/1109-chain-dips.jpg?quality=86&strip=all",
//     title: "Dips",
//     description:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 3,
//     imageUri:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNM9Dgquybz0FXZpTnR-ob3XhSgF0-aVqzmPoLgm7cqnRgpwKDieGgWkSVOk9rw0Ouic&usqp=CAU",
//     title: "Rips",
//     description:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ]
