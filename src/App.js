import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let data = {
    "❤️": "Red Heart",
    "🫶": "Heart Hands",
    "😊": "Smiling Face with Smiling Eyes",
    "🔥": "Fire",
    "💀": "Skull",
    "✨": "Sparkles",
    "🥹": "Face Holding Back Tears",
    "🫠": "Melting Face",
    "🫡": "Saluting Face"
  };
  const keys = Object.keys(data);
  const [meaning, setMeaning] = useState("");

  const emojiClickhandler = (emoji) => {
    var meaning = data[emoji];
    if (meaning === undefined) {
      setMeaning("Sorry, We don't have that in ouu database.");
    }
    setMeaning(meaning);
  };
  const emojiInputhandler = (event) => {
    var userInput = event.target.value;
    var meaning = data[userInput];
    if (meaning === undefined) {
      setMeaning("Sorry, We don't have that in our database.");
    } else setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Emojictionary</h1>
      <input
        className="input"
        placeholder="Enter a single emoji here"
        onChange={emojiInputhandler}
      />
      <div className="emoji-meaning">{meaning}</div>
      <p className="emojis-weknow-text">Emojis we have in our database</p>
      <div className="emoji-container">
        {keys.map((emoji) => (
          <div className="emoji" onClick={() => emojiClickhandler(emoji)}>
            {emoji}
          </div>
        ))}
      </div>
      <div>
        Coded with ❤️ by{" "}
        <a href="https://github.com/nairitya" target="_blank" rel="noreferrer">
          Nairitya
        </a>
      </div>
    </div>
  );
}
