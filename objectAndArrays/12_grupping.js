import _ from "lodash";

export const GRUPPING = () => {
  const users = [
    {
      id: 1,
      name: "John",
      isActive: true,
      likes: 50,
    },
    {
      id: 2,
      name: "Mick",
      isActive: false,
      likes: 23,
    },
    {
      id: 3,
      name: "Bon",
      isActive: true,
      likes: 69,
    },
    {
      id: 4,
      name: "Bill",
      isActive: false,
      likes: 29,
    },
  ];

  // JS
  const groupBy = function (list, prop) {
    return list.reduce(function (aggregator, element) {
      (aggregator[element[prop]] =
        aggregator[element[prop]] || []).push(element);
      return aggregator;
    }, {});
  };

  const result = groupBy(users, "likes");
  console.log("GRUPPING result", result);

  // LODASH
  // Метод  groupBy возвращяет обьект с массивами, присваевает ключи для массивов
  // название передаваемое 2 аргументом в функцию
  // в данном случае 'isActive'
  const lodashResultIsActive = _.groupBy(users, "isActive");
  console.log(
    "GRUPPING lodashResultIsActive",
    lodashResultIsActive
  );

  // в этом случае 'isActive'
  const lodashResultIsLikes = _.groupBy(users, "likes");
  console.log(
    "GRUPPING lodashResultIsLikes",
    lodashResultIsLikes
  );
};
