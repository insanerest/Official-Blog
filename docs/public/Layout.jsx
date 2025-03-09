import "./main.css"; // Ensure this path is correct
import { Link } from "react-router-dom";
export default function Layout({ children }) {
  return (
    <div>
      {/* Header */}
      <header className="site-header" role="banner">
        <div className="wrapper">
          <Link className="site-title" rel="author" to="/">
            while(true) &#123; blog(); &#125;
          </Link>
          <nav className="site-nav">
            <input type="checkbox" id="nav-trigger" className="nav-trigger" />
            <label htmlFor="nav-trigger">
              <span className="menu-icon">
                <svg viewBox="0 0 18 15" width="18px" height="15px">
                  <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484S0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484Z M18,7.516c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,9,0,8.335,0,7.516s0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516Z M18,13.516c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,15,0,14.335,0,13.516s0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516Z"></path>
                </svg>
              </span>
            </label>
            <div className="trigger">
              <Link className="page-link" to="/about">
                About
              </Link>
              <Link className="page-link" to="/contact">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="page-content" aria-label="Content">
        <div className="wrapper">{children}</div>
      </main>

      {/* Footer */}
      <footer className="site-footer h-card">
        <div className="wrapper">
          <h2 className="footer-heading">while(true) &#123; blog(); &#125;</h2>
          <div className="footer-col-wrapper">
            <div className="footer-col footer-col-1">
              <ul className="contact-list">
                <li className="p-name">while(true) &#123; blog(); &#125;</li>
                <li></li>
              </ul>
            </div>
            <div className="footer-col footer-col-2">
              <ul className="social-media-list">
                <li>
                  <Link to="https://github.com/insanerest">
                    <svg className="svg-icon">
                      <use xlinkHref="./minima-social-icons.svg#github"></use>
                    </svg>
                    <span className="username">insanerest</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-col-3">
              <p>
                Welcome to my blog! This is where I share my thoughts on various
                programming topics. To suggest a topic, email me or comment in
                the discussion{" "}
                <Link to="https://github.com/insanerest/insanerest.github.io/discussions">
                  Discussions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
