
module.exports = {
    framework: {
        name: "@storybook/nextjs",
        options: {}
    },
    stories: [
        "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-controls",
        "@storybook/addon-styling-webpack",
    ],
    webpackFinal: async (config) => {
        return config;
    },
};