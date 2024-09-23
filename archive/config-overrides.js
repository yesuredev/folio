// config-overrides.js
module.exports = function override(config, env) {
  const babelLoader = config.module.rules.find((rule) =>
    rule.oneOf
      ? rule.oneOf.find((r) => r.loader && r.loader.includes("babel-loader"))
      : null
  );

  babelLoader.oneOf.forEach((rule) => {
    if (rule.loader && rule.loader.includes("babel-loader")) {
      rule.options.plugins = [
        ...(rule.options.plugins || []),
        ["styled-components", { displayName: true, fileName: true }],
      ];
    }
  });

  return config;
};
