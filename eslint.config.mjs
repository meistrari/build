import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
    },
    ignores: ['.github', '*.yaml', '*/**/storybook-static/'],
    yaml: false,
    jsonc: false,
    regexp: false,
    rules: {
        'node/prefer-global/process': ['off', 'always'],
        'ts/consistent-type-definitions': 'off',
        'style/member-delimiter-style': ['off', 'always'],
        'antfu/no-top-level-await': 'off',
        'antfu/sort-imports': 'off',
        'perfectionist/sort-imports': 'off',
        'perfectionist/sort-named-imports': 'off',
    },
})
