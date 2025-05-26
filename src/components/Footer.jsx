import './css/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">
          © {new Date().getFullYear()} Adarsh Gella. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 