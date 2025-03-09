import React from "react";
import "../../../public/main.css";
import Layout from "../../../public/Layout";
import { Link } from "react-router-dom";
export function WelcomeToTheBlog() {
  return (
    <Layout>
      <main className="page-content" aria-label="Content">
        <div className="wrapper">
          <article
            className="post h-entry"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <header className="post-header">
              <h1 className="post-title p-name" itemProp="name headline">
                Welcome to the blog
              </h1>
              <p className="post-meta">
                <time
                  className="dt-published"
                  dateTime="2025-03-04T13:09:39-05:00"
                  itemProp="datePublished"
                >
                  Mar 4, 2025
                </time>
              </p>
            </header>

            <div className="post-content e-content" itemProp="articleBody">
              <p>
                Welcome to My blog —a space where ideas come to life, knowledge
                is shared, and conversations begin. Whether you’re here to learn
                something new, explore fresh perspectives, or just enjoy a good
                read, you’ve come to the right place.
              </p>

              <p>
                This blog is dedicated to programming and coding thoughts, I
                might sometimes go a bit off-topic in a post. My goal is to
                provide insightful, engaging, and valuable content that sparks
                curiosity and encourages discussion.
              </p>

              <p>
                I’d love to hear from you! Feel free to share your thoughts, ask
                questions, or start a conversation in the discussion page. Let’s
                build a community where we can learn and grow together.
              </p>

              <p>
                <a href="https://github.com/insanerest/insanerest.github.io/discussions">
                  Discussions
                </a>
              </p>

              <p>
                <strong>
                  I will be posting on the blog twice a week, every Monday and
                  Friday, so be sure to check in regularly for new content. Stay
                  tuned for updates and exciting posts!
                </strong>
              </p>

              <p>
                Thanks for stopping by, and I hope you enjoy the journey ahead!
              </p>

              <p>— Insanerest</p>
            </div>

            <Link className="u-url" to="/welcome-to-the-blog.html" hidden></Link>
          </article>
        </div>
      </main>
    </Layout>
  );
}
