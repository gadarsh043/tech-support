import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import AppRoutes from './routes/AppRoutes';
import useScrollToTop from './hooks/useScrollToTop';
import './App.scss';

// Wrapper component to use the scroll to top hook inside Router context
function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
