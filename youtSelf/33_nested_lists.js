import _ from "lodash";

export const NESTED_LISTS = () => {
  const flatList = [
    {
      id: 1,
      name: "lvl1 item 1",
      parentId: null,
    },
    {
      id: 2,
      name: "lvl2 item 2",
      parentId: null,
    },
    {
      id: 3,
      name: "lvl2 item 3",
      parentId: 1,
    },
    {
      id: 4,
      name: "lvl3 item 4",
      parentId: 3,
    },
    {
      id: 5,
      name: "lvl3 item 5",
      parentId: 2,
    },
  ];

  const addChildren = (item) => {
    const children = _.filter(flatList, function (childItem) {
      return childItem.parentId === item.id;
    });
    let nestedChildren = [];

    if (!_.isEmpty(children)) {
      nestedChildren = _.map(children, addChildren);
    }
    return _.assign({}, item, { children: nestedChildren });
  };

  const nestedList = _.chain(flatList)
    .filter(function (item) {
      return item.parentId === null;
    })
    .map(addChildren)
    .value();

  console.log("nestedList", nestedList);
};
