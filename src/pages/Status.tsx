import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";

const answers = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, beatae?",
  "Lorem ipsum dolor sit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Andreas-Ziegler22.png"
            alt="Andreas Ziegler"
          />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Answer</button>
      </form>
      <Separator />
      {/* here was a nice catch map can return something while forEach doesn't */}
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
