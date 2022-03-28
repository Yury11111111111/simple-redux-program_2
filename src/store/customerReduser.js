const defaultState = {
  customer: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return {
        ...state,
        customer: [...state.customer, action.newItem],
      };
    case "REMOVE_CUSTOMER":
      const index = action.payload.index + 1;
      action.payload.index += 1;
      return {
        ...state,
        customer: [
          ...state.customer.slice(0, index),
          ...state.customer.slice(index + 1),
        ],
      };

    case "DELETE_ALL_CUSTOMERS":
      return (state = defaultState);

    default:
      return state;
  }
};
