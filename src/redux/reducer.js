const initialState = {
  users: [
    { id: 1, name: "Don Don" },
    { id: 2, name: "Bom Bom" },
    { id: 3, name: "Hry Hry" },
    { id: 4, name: "Moo Moo" },
  ],
  filter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
