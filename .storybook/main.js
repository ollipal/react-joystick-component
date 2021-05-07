const  { configure } = require('@storybook/react');

function loadStories() {
    require('../src/**/*.stories.tsx');
}

configure(loadStories, module);