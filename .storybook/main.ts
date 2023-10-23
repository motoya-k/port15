
module.exports = {
    framework: {
        name: "@storybook/nextjs",
        options: {}
    },
    stories: [
        "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-docs",
    ],
    docs: {
        autodocs: 'tag',
        defaultName: 'Documentation',
    },
    webpackFinal: async (config) => {
        return config;
    },
};
