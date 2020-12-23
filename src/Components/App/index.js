import Board from '../Board';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';
import Menu from '../Menu';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route exact path="/game/vsIA">
            <Board isOnline={false} />
          </Route>
          <Route exact path="/game/vsFriends">
            <Board isOnline />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
