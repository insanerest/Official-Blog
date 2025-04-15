import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../.././public/Layout";
import posts from "../.././public/posts.json";
import TagPost from "@/components/ui/tagPost";

export default function Tags() {
  const { tag } = useParams();
  const tagPosts = posts.filter((item) => item.tags.includes(tag));
  console.log(tagPosts);
  let postJSX = [];
  return (
    <Layout>
      <main className="page-content">
        <div className="wrapper">
          <div className="home">
            <h2 className="post-list-heading">{`Posts With #${tag}`}</h2>
            <ul className="post-list">
              {tagPosts.map((post) => (
                <li key={post.id}>
                  <TagPost data={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
