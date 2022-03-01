import _ from "lodash";

export const VALIDATION = () => {
  const backendErrors = {
    email: {
      errors: [{ message: "cant be blank" }],
    },
    password: {
      errors: [
        { message: "must contain symols" },
        { message: "must be at least 8 characters long" },
      ],
    },
    passwordConfirmation: {
      errors: [{ message: "must match with password" }],
    },
  };

  const humanReadableBackendErrors = _.map(
    backendErrors,
    function (value, field) {
      const fieldMessages = _.chain(value.errors)
        .map("message")
        .join(", ")
        .value();

      return _.upperFirst(field) + ": " + fieldMessages;
    }
  );

  console.log(
    "VALIDATION humanReadableBackendErrors",
    humanReadableBackendErrors
  );
};
