import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import CardSpec from './pages/CardSpec';
import Navbar from './components/Navbar';
const App = () => {
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    console.log('prev', page);
  };

  const handleNext = () => {
    console.log('next', page);
    setPage(page + 1);
  };

  return (
    <>
      <Router>
        <Navbar handleNext={handleNext} handlePrev={handlePrev} page={page} />
        <div className='pageContainer pt-16'>
          <Switch>
            <Route path='/' exact>
              <Home page={page} />
            </Route>
            <Route path='/card/:id' exact component={CardSpec} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
