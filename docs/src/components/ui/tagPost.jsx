import React from "react";
import { Link } from "react-router-dom";
import PostHashtags from "@/components/ui/postHashtags";

export default function TagPost({ data = {} }) {
  return (
    <div>
      <span className="post-meta">{data.date}</span>
      <h3>
        <Link className="post-link" to={data.route}>
          {data.title}
        </Link>
      </h3>
      <PostHashtags id={data.id} />
    </div>
  );
}
