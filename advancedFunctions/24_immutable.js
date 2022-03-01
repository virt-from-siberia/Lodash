import _ from "lodash";

export const IMMUTABLE = () => {
  const state = {
    isLoading: false,
    data: null,
    error: null,
  };

  // JS IMMUTABLE
  const newState = Object.assign({}, state, {
    isLoading: true,
  });
  console.log("IMMUTABLE  JS", state, newState);

  // Lodash IMMUTABLE

  console.log("IMMUTABLE");
};
