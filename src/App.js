import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import CardSpec from './pages/CardSpec';
import Navbar from './components/Navbar';
import FormYup from './pages/examples/FormYup';
import PropPage from './pages/examples/PropTypes';
const App = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

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
        <Navbar
          handleNext={handleNext}
          handlePrev={handlePrev}
          page={page}
          setFilter={setFilter}
          filter={filter}
        />
        <div className='pageContainer pt-16 mb-6'>
          <Switch>
            <Route path='/' exact>
              <Home page={page} filter={filter} />
            </Route>
            <Route path='/card/:id' exact component={CardSpec} />
            <Route path='/form' exact component={FormYup} />
            <Route path='/proptypes' exact component={PropPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
