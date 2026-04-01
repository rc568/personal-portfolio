import tsParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["*.astro"],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
                sourceType: "module"
            }
        },
        rules: {},
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        languageOptions: {
            parser: tsParser,
            sourceType: "module"
        }
    }
];
