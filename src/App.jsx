import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Catalog from './pages/Catalog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  blogData,
  bestsellersData,
  catalogData,
  advantagesData,
  articleCardsData,
} from './data';

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Header />
        <div>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  blogs={blogData}
                  bestsellers={bestsellersData}
                  advantages={advantagesData}
                  articleCards={articleCardsData}
                />
              }
            ></Route>
            <Route
              path="/blog/:id"
              exact
              element={<Blog blogs={blogData} bestsellers={bestsellersData} />}
            ></Route>
            <Route
              path="/catalog"
              exact
              element={
                <Catalog blogs={blogData} catalogProducts={catalogData} />
              }
            ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
