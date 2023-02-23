import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Separator } from "./components/Separator";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// like its coming from an API
const tweets = ["My first tweet", "Test", "I can tweet"];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <RouterProvider router={router} />

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
          <Separator />
          {/* here was a nice catch map can return something while forEach doesn't */}
          {tweets.map((tweet) => {
            return <Tweet key={tweet} content={tweet} />;
          })}
        </main>
      </div>
    </div>
  </React.StrictMode>
);
