import './css/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {currentYear} <span className="highlight">Tech Support</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 