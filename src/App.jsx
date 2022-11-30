import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { blogData, bestsellersData, advantagesData } from './data';

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
                />
              }
            ></Route>
            <Route path="/test" element={<div>Test</div>}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
