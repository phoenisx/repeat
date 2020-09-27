import {StorybookUIRoot} from './storybook/storybook';

import App from './src/App';

export default __DEV__ ? StorybookUIRoot : App;
