import _ from "lodash";

export const CLONE = () => {
  const baseConfig = {
    apiUrl: "google.com",
    port: 4000,
  };

  const createExtendedConfig = (config) => {
    // clone поверхностное копирование
    const clonedConfig = _.clone(config);
    clonedConfig.host = "yandex";
    return clonedConfig;
  };

  console.log(
    "CLONE  createExtendedConfig",
    createExtendedConfig(baseConfig)
  );

  // cloneDeep полное копирование
  const clonedConfig = _.cloneDeep(config);

  console.log(
    "CLONE  DEEP createExtendedConfig",
    createExtendedConfig(clonedConfig)
  );

  console.log("CLONE");
};
