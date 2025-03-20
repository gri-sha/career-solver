import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ["next/core-web-vitals", "next/typescript", "prettier"],
        rules: {
            "semi": ["error", "always"],
            "indent": ["error", 4], 
            "quotes": ["error", "double"], 
            "prefer-template": "error", 
            "prefer-arrow-callback": "error",
            "no-unused-vars": "error",
        },
        ignorePatterns: [
            "node_modules/",
            ".next/",
            "out/",
            "build/",
            "*.log",
            "src/components/ui/"
        ]
    }),
];

export default eslintConfig;