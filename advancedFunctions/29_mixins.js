import _ from "lodash";

export const MIXINS = () => {
  // _.chain("foo").capitalizeLast().value();

  const capitalizeLast = (string) => {
    const lastSymbol = _.last(string);
    const initialSymbol = _.chain(string)
      .initial()
      .join("")
      .value();

    return initialSymbol + _.capitalize(lastSymbol);
  };

  console.log("MIXINS", capitalizeLast("foo"));

  _.mixin({
    capitalizeLast: capitalizeLast,
  });

  const result = _.chain("foo").capitalizeLast().value();

  console.log("MIXINS result", result);
};
