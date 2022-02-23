import _ from "lodash";

export const CONCAT_SPLIT_ARRAYS = () => {
  // JS
  const arr = [1, 2, 3];
  const joined = arr.join("");

  console.log("CONCAT_SPLIT_ARRAYS joined"), joined;

  const lodashSplit = _.split("foo/bar", "/");
  console.log("CONCAT_SPLIT_ARRAYS lodashSplit"),
    lodashSplit;
};
