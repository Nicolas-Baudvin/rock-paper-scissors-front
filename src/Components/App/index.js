import Board from '../Board';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';
import Menu from '../Menu';
import CreateRoom from '../CreateRoom';
import OnlineGame from '../OnlineGame';

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
          <Route exact path="/game/create">
            <CreateRoom />
          </Route>
          <Route exact path="/game/:name">
            <OnlineGame />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
