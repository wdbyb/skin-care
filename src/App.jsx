import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  blogData,
  bestsellersData,
  advantagesData,
  articleCardsData,
} from './data';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  blogs={blogData}
                  bestsellers={bestsellersData}
                  advantages={advantagesData}
                  articleCards={articleCardsData}
                />
              }
            ></Route>
            <Route path="/blog/:id" element={<Blog blogs={blogData} />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
