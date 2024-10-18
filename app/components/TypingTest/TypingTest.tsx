import { useState } from "react";
import Mainheader from "../ui/Mainheader";

const TypingTest = () => {
  const paragraph = "Table";
  const [inputValue, setInputValue] = useState("");

  let green = "";
  if (paragraph === inputValue) {
    green = "text-green-400";
  }

  console.log(inputValue);

  return (
    <div>
      <div>
        <Mainheader>Typing Test</Mainheader>
      </div>
      <div
        className={`pt-5 w-1/2 text-center mx-auto text-3xl leading-relaxed ${green}`}
      >
        <p>
          {paragraph}
          {/* Table orange bicycle computer giraffe toaster window socks ceiling
          banana cloud pencil umbrella sandwich chair ocean telephone cactus
          jelly carpet spaceship notebook waterfall tree dragon shoes monitor
          pizza lamp river guitar blanket mountain cup hat airplane dolphin
          brick mirror grass paper */}
        </p>
      </div>
      <div className="pt-10 text-center mx-auto text-3xl leading-relaxed">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TypingTest;
