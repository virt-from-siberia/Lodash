import _ from "lodash";

export const THROTTLE = () => {
  // THROTTLE в отличии от debounce работает по одругому
  // срабатывает сразу при действии и после ждет таймаут
  // после таймаута сразатывает заново
  const handler = (event) => {
    console.log(
      "send request to server",
      event.target.value
    );
  };

  document
    .getElementById("name_throttle")
    .addEventListener("keydown", _.throttle(handler, 2000));
};
