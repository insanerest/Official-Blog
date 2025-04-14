"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";

const languageDisplayMap = {
  js: "JavaScript",
  jsx: "JSX",
  ts: "TypeScript",
  tsx: "TSX",
  bash: "Bash",
  shell: "Shell",
  sh: "Shell",
  zsh: "zsh",
  python: "Python",
  json: "JSON",
  html: "HTML",
  css: "CSS",
  cpp: "C++",
  c: "C",
  cs: "C#",
  java: "Java",
  go: "Go",
  rust: "Rust",
  r: "R",
  php: "PHP",
  lua: "Lua",
  swift: "Swift",
  env: "env"
};

export default function CodeBlock({ code, language = "js", highlight=[], noMargin=false}) {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);
    const handler = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const langLabel = languageDisplayMap[language] || language;
  const outerStyle = noMargin
    ? "relative border rounded-xl overflow-hidden bg-muted"
    : "relative my-4 border rounded-xl overflow-hidden bg-muted";
  return (
    <div className={outerStyle}>
      <div className="flex justify-between items-center px-5 py-2 bg-muted/60 border-b text-xs font-medium text-muted-foreground">
        <span className="tracking-wide">{langLabel}</span>
        <Button
          onClick={handleCopy}
          size="icon"
          variant="ghost"
          className="text-muted-foreground hover:text-foreground"
        >
          {copied ? (
            <CheckIcon className="w-4 h-4" />
          ) : (
            <CopyIcon className="w-4 h-4" />
          )}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          padding: "1rem 1.25rem",
          fontSize: "0.875rem",
          background: "transparent",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        }}
        wrapLongLines
        showLineNumbers={true}
        lineProps={(lineNumber) => {
          if (highlight.includes(lineNumber)) {
            return {
              style: { backgroundColor: "yellow", display: "block" },
            };
          }
          return { style: { display: "block" } };
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
