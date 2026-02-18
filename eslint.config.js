import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off", //	отключено, чтобы разрешить использовать односоставные названия компонентов Vue
      "vue/require-default-prop": "off" // отключено, поскольку наличие обязательного значения по умолчанию для всех пропсов может быть необязательно в некоторых проектах
    }
  }
];