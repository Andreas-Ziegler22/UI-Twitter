import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

// like its coming from an API
let newTweet = "";

export function Timeline() {
  const [tweets, setTweets] = useState([
    "My first tweet",
    "Test",
    "I can tweet",
  ]);
  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet]);
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Andreas-Ziegler22.png"
            alt="Andreas Ziegler"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            onChange={(event) => {
              newTweet = event.target.value;
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {/* here was a nice catch map can return something while forEach doesn't */}
      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
