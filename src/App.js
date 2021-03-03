import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
const App = () => {
  return (
    <div className='pageContainer'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
