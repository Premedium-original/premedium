import { hot } from 'react-hot-loader/root';
import React from 'react';
import Test1 from '../test1/index';
import Test2 from '../test2/index';
import ReduxSagaTest from '../ReduxSagaTest';
import UIComponents from '../UIComponents/index';

const App = () => (
  <div>
    <Test1 />
    <Test2 />
    <ReduxSagaTest />
    <UIComponents />
  </div>
);

export default hot(App);
