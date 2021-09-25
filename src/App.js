
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import CustomerAccessPage from './containers/costumerAccessPage';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/login" component={} />
          <Route path="/signup" component={}/> */}
          <Route path="/costumer/access" exact component={CustomerAccessPage}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
