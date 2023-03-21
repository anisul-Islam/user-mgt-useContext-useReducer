export const initialState = {
  users: [
    {
      id: 1,
      username: "anisul",
    },
    {
      id: 2,
      username: "sakib",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsers,
      };
    case "UPDATE_USER":
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      const copiedUsers = [...state.users];
      copiedUsers.splice(userIndex, 1, action.payload);
      return {
        ...state,
        users: copiedUsers,
      };

    default:
      return state;
  }
};
