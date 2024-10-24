import { KeyboardEvent, useState } from "react";
import Mainheader from "../ui/Mainheader";
import ComponentWrapper from "../ui/ComponentWrapper";
// import { nanoid } from "nanoid";

const TypingTest = () => {
  const paragraph =
    "table orange bicycle computer giraffe toaster window socks ceiling banana cloud pencil umbrella sandwich chair ocean telephone cactus jelly carpet notebook waterfall tree dragon shoes monitor pizza lamp river guitar blanket mountain cup hat airplane dolphin brick mirror grass paper";
  const paragraphArray = paragraph.split(" ");

  const [inputValue, setInputValue] = useState("");
  const [typedWords, setTypedWords] = useState<string[]>([]);

  const handleSpaceKey = (e: KeyboardEvent) => {
    e.preventDefault();
    // const inputElement = e.target as HTMLInputElement;

    if (e.code === "Space") {
      const currentWord = inputValue.trim();
      if (currentWord) {
        setTypedWords((previousInputValues) => [
          ...previousInputValues,
          currentWord,
        ]);
      }
      setInputValue("");
    }
  };
  console.log(typedWords);
  console.log(Array.isArray(typedWords));

  return (
    <ComponentWrapper>
      <div>
        <Mainheader>Typing Test</Mainheader>
      </div>
      <div
        className={`pt-5 w-3/4 mx-auto text-3xl leading-relaxed flex justify-center`}
      >
        <p>
          {paragraphArray.map((singleWord, index1) => {
            let eachWordColor = "";
            if (typedWords[index1] === singleWord) {
              eachWordColor = "text-green-300";
            } else if (typedWords[index1] !== undefined) {
              eachWordColor = "text-red-300";
            }

            return (
              <span key={index1} className={`${eachWordColor}`}>
                {singleWord + " "}
              </span>
            );
          })}
        </p>
      </div>
      <div className="pt-10 text-center mx-auto text-3xl leading-relaxed">
        <input
          className="bg-gray-700"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleSpaceKey}
        />
      </div>
      <div className="">
        <p>{typedWords}</p>
      </div>
    </ComponentWrapper>
  );
};

export default TypingTest;
