"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function TabbedCodeBlock({ files }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFile = files[activeIndex];

  return (
    <div className="rounded-xl border overflow-hidden bg-muted">
      {/* Tabs */}
      <div className="flex border-b bg-muted/50">
        {files.map((file, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-sm px-4 py-2 font-medium transition-colors ${
              index === activeIndex
                ? "bg-background text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {file.filename}
          </button>
        ))}
      </div>

      {/* Code Block */}
      <CodeBlock code={activeFile.code} language={activeFile.language} noMargin={true} highlight={activeFile.highlight}/>
    </div>
  );
}