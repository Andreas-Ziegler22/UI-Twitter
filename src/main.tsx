import React from "react";
import ReactDOM from "react-dom/client";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
} from "phosphor-react";

import "./global.css";

import twitterLogo from "./assets/logo-twitter.svg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">Content</div>
    </div>
  </React.StrictMode>
);
