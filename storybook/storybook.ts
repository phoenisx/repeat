import {getStorybookUI, configure} from '@storybook/react-native';
import './addons';

configure(() => {
  require('../src/stories/stories.ts');
}, module);

export const StorybookUIRoot = getStorybookUI({
  asyncStorage:
    require('@react-native-community/async-storage').default ||
    require('react-native').AsyncStorage ||
    null,
});
