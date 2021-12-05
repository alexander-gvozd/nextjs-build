const InitialState = {
  userId: 0,
  name: "",
  email: "",
};

interface IUser {
  userId: number;
  name: string;
  email: string;
}

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function UserReducer(state: IUser = InitialState, action: any) {
  switch (action.type) {
    case "renamed":
      state.name = action.name;
      return { ...state };
    default:
      return state;
  }
}

export default UserReducer;
