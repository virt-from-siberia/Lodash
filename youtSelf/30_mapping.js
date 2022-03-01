import _ from "lodash";

export const MAPPING = () => {
  const loc = [
    {
      location_key: [32, 24, 11],
      autoAssign: 1,
    },
    {
      location_key: [41, 42],
      autoAssign: 1,
    },
  ];

  const bulkConfig = [
    {
      dataValues: {
        config_key: 100,
      },
    },
    {
      dataValues: {
        config_key: 200,
      },
    },
  ];

  const result = _.map(loc, function (locEl, index) {
    return _.map(
      locEl.location_key,
      function (locationKey) {
        return {
          config_key:
            bulkConfig[index].dataValues.config_key,
          location_key: locationKey,
          autoAssign: locEl.autoAssign,
        };
      }
    );
  });

  const flattenedResult = _.flatten(result);
  console.log("flattenedResult", flattenedResult);

  const getConfigs = function (locEl, index) {
    return _.map(
      locEl.location_key,
      function (locationKey) {
        return {
          config_key:
            bulkConfig[index].dataValues.config_key,
          location_key: locationKey,
          autoAssign: locEl.autoAssign,
        };
      }
    );
  };

  const configs = _.chain(loc)
    .map(getConfigs)
    .flatten()
    .value();

  console.log("configs", configs);
};
