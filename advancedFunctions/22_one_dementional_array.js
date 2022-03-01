import _ from "lodash";

export const ONE_DIMENSIONAL_ARRAY = () => {
  const foo = [
    [1, 2],
    [3, [5]],
  ];

  console.log("ONE_DIMENSIONAL_ARRAY", _.flatten(foo));
};
