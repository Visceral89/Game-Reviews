import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// Pages
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import CategoryPage from './pages/CategoryPage';

// Components
import SiteHeader from './components/SiteHeader';

// GraphQL Imports
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})



function App() {
  return (

  <Router>
    <ApolloProvider>
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
    </ApolloProvider>
    </Router>
  );
}

export default App;
