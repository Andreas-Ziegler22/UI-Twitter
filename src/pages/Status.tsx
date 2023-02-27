import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, beatae?",
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ]);
  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handHotKeySubmit(event: KeyboardEvent) {
    // if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
    //   setAnswers([newAnswer, ...answers]);
    //   setNewAnswer("");
    // }
    if (event.key === "Enter") {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem cupiditate dicta et quo mollitia." />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Andreas-Ziegler22.png"
            alt="Andreas Ziegler"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {/* here was a nice catch map can return something while forEach doesn't */}
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
