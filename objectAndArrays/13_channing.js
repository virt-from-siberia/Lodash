import _ from "lodash";

export const CHANNING = () => {
  const users = [
    {
      id: 1,
      name: "John",
      isActive: true,
      likes: 50,
      age: 32,
    },
    {
      id: 2,
      name: "Mick",
      isActive: false,
      likes: 23,
      age: 28,
    },
    {
      id: 3,
      name: "Bon",
      isActive: true,
      likes: 69,
      age: 69,
    },
    {
      id: 4,
      name: "Bill",
      isActive: false,
      age: 39,
    },
    {
      id: 4,
      name: "Elise",
      isActive: true,
      age: 18,
    },
  ];

  // Lodash without CHANE
  const getYoungestMessage = function (users) {
    const activeUsers = _.filter(users, "isActive");
    const sortedActiveUsers = _.orderBy(activeUsers, [
      "age",
    ]);
    const firstUser = sortedActiveUsers[0];
    return (
      firstUser.name + " " + "is" + " " + firstUser.age
    );
  };
  const result = getYoungestMessage(users);
  console.log("CHANNING result", result);

  // Lodash with CHANE
  // chain вызывает цепоку методов для трансформации
  // Каждый вложенный метод принемает предикат = isActive, age
  const getYoungestMessageWithChain = function (users) {
    return (
      _.chain(users)
        .filter("isActive")
        .orderBy(["age"])
        .map(function (user) {
          return user.name + " " + "is" + " " + user.age;
        })
        // .head()
        .value()
    );
  };

  const resultWithChain =
    getYoungestMessageWithChain(users);
  console.log("CHANNING resultWithChain", resultWithChain);
};
