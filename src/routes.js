import React from 'react';
import { Route, Switch } from 'react-router-dom';

import OptionImage from './components/OptionImage';
import OptionText from './components/OptionText';

let pchc20 = false;

// Expiration date for PCHC20 Logo
if (Date.now() < new Date('2019-01-01')) {
  pchc20 = true;
}

const OptionTextComponent = (props) => {
  return (
    <OptionText pchc20={pchc20} {...props} />
  );
}

export default (
  <Switch>
    <Route path="/image" component={OptionImage} />
    <Route component={OptionTextComponent} />
  </Switch>
);
