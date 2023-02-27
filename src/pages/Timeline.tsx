import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "My first tweet",
    "Test",
    "I can tweet",
  ]);
  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }
  function handHotKeySubmit(event: KeyboardEvent) {
    // if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
    //   setAnswers([newAnswer, ...answers]);
    //   setNewAnswer("");
    // }
    if (event.key === "Enter") {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
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
            onKeyDown={handHotKeySubmit}
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value);
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
