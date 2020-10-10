const fs = require('fs');
const utils = require('@react-pakistan/util-functions/storybook');
const allStories = require('../stories.json');

const baseUrl = 'https://react-pakistan.github.io/react-emoji-collection/?path=/story/';

utils.generateSitemap(fs, baseUrl, allStories.stories);
