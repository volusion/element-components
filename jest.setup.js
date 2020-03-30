/* eslint no-console: "off" */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

configure({ adapter: new Adapter() });
