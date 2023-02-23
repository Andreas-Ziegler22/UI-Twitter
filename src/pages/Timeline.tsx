import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

// like its coming from an API
const tweets = ["My first tweet", "Test", "I can tweet"];

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />
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
  );
}
