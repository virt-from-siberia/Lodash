import _ from "lodash";

export const RANDOMIZE = () => {
  // JS Random
  console.log(Math.random());

  //Lodash Random
  console.log("RANDOMIZE random(5)", _.random(5));

  console.log("RANDOMIZE random(0, 5)", _.random(0, 5));

  console.log(
    "RANDOMIZE random(5, true)",
    _.random(5, true)
  );
};
