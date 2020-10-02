// Initial state of the user when he has not logged in/signedout
export const initialState = null;

// this reducer takes 2 states, if in the signin.js if the dispatch has some
// action
// associated with it then the if statement will run
export const reducer = (state, action) => {
  if (action.type == "USER") {
    return action.payload;
  }
  return state;
};
