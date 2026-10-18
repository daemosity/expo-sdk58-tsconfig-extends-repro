import { importX } from 'eslint-plugin-import-x';
import tsParser from '@typescript-eslint/parser';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: { parser: tsParser },
        plugins: { 'import-x': importX },
        settings: {
            'import-x/resolver-next': [createTypeScriptImportResolver()],
        },
        rules: { 'import-x/no-unresolved': 'error' },
    },
];