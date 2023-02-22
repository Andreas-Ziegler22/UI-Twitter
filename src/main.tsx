import React from "react";
import ReactDOM from "react-dom/client";
import { Sparkle } from "phosphor-react";

import "./global.css";

import { Tweet } from "./components/Tweet";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/Andreas-Ziegler22.png"
                alt="Andreas Ziegler"
              />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>
          <div className="separator"></div>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>
);
