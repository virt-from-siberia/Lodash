import _ from "lodash";

export const REPLACE_URLS = () => {
  const replaceParamsUrl = (url, replacements) => {
    return _.reduce(
      replacements,
      function (acc, replacement) {
        return _.replace(acc, ":" + replacement.from, replacement.to);
      },
      url
    );
  };

  const initialUrl = "/posts/:postId/comments/:commentId";

  const resultUrl = replaceParamsUrl(initialUrl, [
    {
      from: "postId",
      to: "2",
    },
    {
      from: "commentId",
      to: "3",
    },
  ]);

  console.log("REPLACE_URLS resultUrl", resultUrl);
};
