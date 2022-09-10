import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import CategoryPage from './pages/CategoryPage';

// Components
import SiteHeader from './components/SiteHeader';



function App() {
  return (

  <Router>
    <div className="App">
      <SiteHeader />
        <Routes>
          <Route exact path="/" element={<HomePage />}>
          </Route>
          <Route path="/details/:id" element={<ReviewPage />}>
          </Route>
          <Route path="/category/:id" element={<CategoryPage />}>
          </Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
