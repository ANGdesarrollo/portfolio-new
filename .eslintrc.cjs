module.exports = {
    "root": true,
    "env": {browser: true, es2020: true},
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:tailwindcss/recommended"
    ],
    "plugins": [
        "prefer-arrow"
    ],
    "ignorePatterns": [
        "*.mdx",
        "*.md",
        "*.rs",
        "*.toml"
    ],
    "settings": {
        "react": {
            "version": "18.2.0" // Añadir esto
        }
    },
    "rules": {
        "tailwindcss/no-contradicting-classname": "error",
        "react-hooks/rules-of-hooks": "off",
        "quotes": ["warn", "single"],
        "semi": ["warn", "always"],
        "semi-spacing": ["warn", {"before": false, "after": true}],
        "comma-spacing": ["warn", {"before": false, "after": true}],
        "space-infix-ops": 2,
        "space-in-parens": [1, "never"],
        "spaced-comment": ["error", "always"],
        "array-bracket-spacing": ["warn", "never"],
        "object-curly-spacing": ["warn", "always"],
        "block-spacing": "warn",
        "arrow-spacing": "warn",
        "space-before-function-paren": ["warn", "never"],
        "keyword-spacing": ["warn", {"before": true}],
        "linebreak-style": ["error", "unix"],
        "padded-blocks": ["error", "never"],
        "eol-last": ["error", "always"],
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "prefer-const": ["warn"],
        "max-len": [
            "error",
            {"ignoreStrings": true, "ignoreRegExpLiterals": true, "code": 200}
        ],
        "no-shadow-restricted-names": "error",
        "no-sequences": "error",
        "no-new-wrappers": "error",
        "no-multiple-empty-lines": "warn",
        "no-eval": "error",
        "no-fallthrough": "warn",
        "no-invalid-this": "off",
        "no-cond-assign": "error",
        "no-duplicate-case": "error",
        "no-empty": "off",
        "no-caller": "error",
        "new-parens": "error",
        "max-lines": ["warn", 600],
        "no-trailing-spaces": [
            "warn",
            {"ignoreComments": false, "skipBlankLines": false}
        ],
        "no-unused-vars": "off",
        "no-prototype-builtins": "warn",
        "comma-dangle": [
            "error",
            {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ],
        "no-console": 1,
        "prefer-template": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "object-shorthand": "warn",
        "one-var": ["warn", "never"],
        "prefer-object-spread": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "radix": "error",
        "curly": "warn",
        "use-isnan": "error",
        "indent": ["warn", 2, {"SwitchCase": 1, "MemberExpression": "off"}],
        "react/prop-types": "off"
    }
}
