import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';

import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
    </Switch>
  );
};

export default App;
