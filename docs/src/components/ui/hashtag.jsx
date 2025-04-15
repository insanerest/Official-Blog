import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hashtag({ tags = [] }) {
  const navigate = useNavigate();

  const handleClick = (tag) => {
    const safeTag = tag.trim().replace(/\s+/g, "");
    navigate(`/tags/${encodeURIComponent(safeTag)}`);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <button
          onClick={() => handleClick(tag)}
          key={index}
          className="px-4 py-1 rounded-full bg-black text-white text-sm font-semibold border border-white hover:scale-105 transition-transform duration-300"
        >
          #{tag.trim().replace(/\s+/g, "")}
        </button>
      ))}
    </div>
  );
}
