import { KeyboardEvent, useState } from "react";
import Mainheader from "../ui/Mainheader";
// import { nanoid } from "nanoid";

const TypingTest = () => {
  const paragraph =
    "Table orange bicycle computer giraffe toaster window socks ceiling banana cloud pencil umbrella sandwich chair ocean telephone cactus jelly carpet spaceship notebook waterfall tree dragon shoes monitor pizza lamp river guitar blanket mountain cup hat airplane dolphin brick mirror grass paper";

  const [inputValue, setInputValue] = useState("");

  const eachCharacterOfParagraph = paragraph.split("");
  const eachCharacterOfInputValue = inputValue.split("");

  const handleClick = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.code === "Space") {
      // const inputElement = e.target as HTMLInputElement;
    }
    console.log(e);
  };

  return (
    <div>
      <div>
        <Mainheader>Typing Test</Mainheader>
      </div>
      <div
        className={`pt-5 w-1/2 mx-auto text-3xl leading-relaxed flex justify-center`}
      >
        <p>
          {eachCharacterOfParagraph.map(
            (singleCharacterFromParagraph, index) => {
              let eachCharacterColor = "";
              if (
                eachCharacterOfInputValue[index] ===
                singleCharacterFromParagraph
              ) {
                eachCharacterColor = "text-green-300";
              } else if (eachCharacterOfInputValue[index] !== undefined) {
                eachCharacterColor = "text-red-300";
              }

              return (
                <span key={index} className={`${eachCharacterColor}`}>
                  {singleCharacterFromParagraph}
                </span>
              );
            }
          )}
        </p>
      </div>
      <div className="pt-10 text-center mx-auto text-3xl leading-relaxed">
        <input
          className="bg-gray-700"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleClick}
        />
      </div>
      <div className="">
        <p> {inputValue} </p>
      </div>
    </div>
  );
};

export default TypingTest;
