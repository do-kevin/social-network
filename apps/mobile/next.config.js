const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["solito"]);

module.exports = withPlugins(
  {
    reactStrictMode: true,
    transpilePackages: ["ui"],
  },
  withTM
);
