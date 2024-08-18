import React, { useState } from "react";
import { useEffect, useRef } from "react";
import "./post-footer.css";

export default function PostFooter() {
  const commentsEl = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "wonkooklee/blog");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");

    if (commentsEl.current) {
      commentsEl.current.appendChild(scriptEl);
    }
    setLoaded(true);
  }, []);

  return (
    <div>
      <div ref={commentsEl} />
    </div>
  );
}
