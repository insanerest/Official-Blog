import React from "react";
import "../../public/main.css";
import Layout from "public/Layout";
export function Home() {
  return (
    <Layout>
      <main className="page-content">
        <div className="wrapper">
          <div className="home">
            <h2 className="post-list-heading">Posts</h2>
            <ul className="post-list">
              <li>
                <span className="post-meta">Mar 4, 2025</span>
                <h3>
                  <a className="post-link" href="/welcome-to-the-blog">
                    Welcome to the blog
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
