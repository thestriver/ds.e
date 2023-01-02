module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    // addons: [
    //     // '@storybook/addon-controls', 
    // '@storybook/addon-a11y', '@storybook/addon-storysource', '@storybook/addon-knobs'],
    addons: [
        // '@storybook/preset-typescript',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y'
    ]
};