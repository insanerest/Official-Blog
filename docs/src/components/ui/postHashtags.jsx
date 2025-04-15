import React from "react";
import Hashtag from "./hashtag";
import posts from "../../../public/posts.json";

export default function PostHashtags({ id = 1 }) {
  const postTags = posts.find((item) => item.id === id).tags;
  return <Hashtag tags={postTags} />
}
