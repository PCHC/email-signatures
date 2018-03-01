import React from 'react';
import { Route, Switch } from 'react-router-dom';

import OptionImage from './components/OptionImage';
import OptionText from './components/OptionText';

export default (
  <Switch>
    <Route path="/text" component={OptionText} />
    <Route component={OptionImage} />
  </Switch>
);
