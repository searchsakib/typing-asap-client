import { KeyboardEvent, useEffect, useState } from "react";
import Mainheader from "../ui/Mainheader";
import ComponentWrapper from "../ui/ComponentWrapper";

const TypingTest = () => {
  // Fetch the data from the loader using useLoaderData

  const [inputValue, setInputValue] = useState("");
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://coffee-store-server-ten-ruddy.vercel.app/words")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Check if data is fetched correctly
        setWords(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (!isLoading) {
    return (
      <ComponentWrapper>
        <Mainheader>
          <div className="flex items-center justify-center m-14 lg:m-[150px]">
            <span className="loading loading-spinner loading-lg text-[#05386B]"></span>
          </div>
        </Mainheader>
      </ComponentWrapper>
    );
  }

  const handleSpaceKey = (e: KeyboardEvent) => {
    e.preventDefault();
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

  return (
    <ComponentWrapper>
      <div>
        <Mainheader>Typing Test</Mainheader>
      </div>
      <div className="pt-5 w-3/4 mx-auto text-3xl leading-relaxed flex justify-center">
        <p>
          {words.map((singleWord, index) => {
            let eachWordColor = "";
            if (typedWords[index] === singleWord) {
              eachWordColor = "text-green-300"; // Correct word color
            } else if (typedWords[index] !== undefined) {
              eachWordColor = "text-red-300"; // Incorrect word color
            }

            return (
              <span key={index} className={`${eachWordColor}`}>
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
      <div>
        <p>{typedWords.join(" ")}</p>
      </div>
    </ComponentWrapper>
  );
};

export default TypingTest;
