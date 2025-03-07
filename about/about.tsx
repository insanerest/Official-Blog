import React from "react";
import "../../public/main.css"; // Ensure this path is correct
import Layout from "public/Layout";
export function About(){
  return (
    <Layout>

      <main className="page-content" aria-label="Content">
        <div className="wrapper">
          <article className="post">
            <header className="post-header">
              <h1 className="post-title">About</h1>
            </header>
            <div className="post-content">
              <h1>
                About <strong>while(true) &#123; blog(); &#125;</strong>
              </h1>
              <p>
                Welcome to <strong>while(true) &#123; blog(); &#125;</strong>—a
                blog where coding never stops! 🚀
              </p>
              <h2>Why This Blog?</h2>
              <p>
                Coding isn’t just about writing lines of logic—it’s about
                solving problems, breaking things (sometimes on purpose), and
                figuring out how to fix them. Here, I share my experiences,
                insights, and maybe even some{" "}
                <strong>epic debugging fails</strong> along the way.
              </p>
              <h2>Who Am I?</h2>
              <p>
                I’m a developer passionate about{" "}
                <strong>Website and Software development</strong>, always
                experimenting with new ideas and pushing projects to the next
                level. This blog is my way of documenting what I learn and
                sharing it with the world.
              </p>
              <h2>What to Expect</h2>
              <ul>
                <li>
                  🔥 Deep dives into{" "}
                  <strong>Lots of programming languages</strong>
                </li>
                <li>🛠️ Hands-on tutorials &amp; coding experiments</li>
                <li>🎮 Game dev insights &amp; project updates</li>
                <li>🤯 Debugging nightmares (and how to fix them)</li>
                <li>📰 Random tech thoughts &amp; industry news</li>
              </ul>
              <p>
                So, if you love to{" "}
                <strong>code, break things, and learn along the way</strong>,
                stick around!
              </p>
              <p>Got questions or ideas? Contact me here:</p>
              <p>
                <a href="/contact">Contact me</a>
              </p>
              <p>Also here is the discussion page:</p>
              <p>
                <a href="https://github.com/insanerest/insanerest.github.io/discussions">
                  Discussions
                </a>
              </p>
              <p>Happy coding! 😃</p>
              <p>
                You can find me at GitHub:{" "}
                <a href="https://github.com/insanerest">Insanerest</a>
              </p>
              <p>
                You can find the source code for this blog at GitHub:{" "}
                <a href="https://github.com/insanerest/insanerest.github.io">
                  Source Code
                </a>
              </p>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
};
