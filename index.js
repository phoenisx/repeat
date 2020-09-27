import {AppRegistry} from 'react-native';
import App from './bootstrap';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
