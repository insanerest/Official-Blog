import React from "react";

export default function Hashtag({tags=[]}){
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-4 py-1 rounded-full bg-black text-white text-sm font-semibold border border-white hover:scale-105 transition-transform duration-300"
        >
          #{tag.trim().replace(/\s+/g, "")}
        </span>
      ))}
    </div>
  );
};
