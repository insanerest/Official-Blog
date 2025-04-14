import "../../public/main.css";
import Layout from "../../public/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <main className="page-content">
        <div className="wrapper">
          <div className="home">
            <h2 className="post-list-heading">Posts</h2>
            <ul className="post-list">
              <li>
                <span className="post-meta">Apr 7, 2025</span>
                <h3>
                  <Link className="post-link" to="/welcome-to-the-blog">
                    Welcome to the blog
                  </Link>
                </h3>
              </li>
              <li>
                <span className="post-meta">Apr 14, 2025</span>
                <h3>
                  <Link className="post-link" to="/building-a-secure-api">
                    Building Secure API Authentication in Node.js Without OAuth
                  </Link>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
