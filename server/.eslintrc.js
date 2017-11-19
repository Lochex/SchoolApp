module.exports = {
  "root": true,
  "extends": "airbnb",
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "rules": {
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "new-cap": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "import/no-dynamic-require": 0,
    "comma-dangle": 0,
    "curly": ["error", "multi-line"],
    "react/require-extension": "off",
    "import/extensions": [0, "always"],
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
    "import/no-unresolved": [2, { "commonjs": true }],
    "no-shadow": ["error", { "allow": ["req", "res", "err"] }],
    "valid-jsdoc": ["error", {
      "requireReturn": true,
      "requireReturnType": true,
      "requireParamDescription": false,
      "requireReturnDescription": true
    }],
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true
      }
    }]
  }
}