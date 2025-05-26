import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
      <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
