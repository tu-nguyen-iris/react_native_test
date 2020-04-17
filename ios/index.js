/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Hi from './hi';
import Hi2 from './hi2';
import Input from './inputTest';
import Falist from './falist';

AppRegistry.registerComponent(appName, () => Falist);
