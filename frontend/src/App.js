import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import CategoryPage from './pages/CategoryPage';

// Components
import SiteHeader from './components/SiteHeader';



function App() {
  return (

  <Router>
    <Routes>
    <div className="App">
      <SiteHeader />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/details/:id">
            <ReviewPage />
          </Route>
          <Route path="/category/:id">
            <CategoryPage />
          </Route>
    </div>
    </Routes>
    </Router>
  );
}

export default App;
