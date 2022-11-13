export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  searchFilter: {}
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "SEARCH":
     
      return { ...state, searchFilter: action.item };
    
    default:
      return state;

  }
}
export default reducer;
