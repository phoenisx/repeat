import React from 'react';
import {storiesOf} from '@storybook/react-native';
import App from '../App';

const appStories = storiesOf('App', module);

// then I add a story with the name default view, I can add multiple stories to button stories
appStories.add('App', () => <App />);
