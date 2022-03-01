import _ from "lodash";

export const DEBOUNCE = () => {
  const handler = (event) => {
    console.log(
      "send request to server",
      event.target.value
    );
  };

  document
    .getElementById("name")
    .addEventListener("keydown", _.debounce(handler, 2000));

  console.log("DEBOUNCE");
};
