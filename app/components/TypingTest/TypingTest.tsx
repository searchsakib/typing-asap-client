import { KeyboardEvent, useEffect, useState } from "react";
import Mainheader from "../ui/Mainheader";
import ComponentWrapper from "../ui/ComponentWrapper";
import { TWords } from "~/types/words.type";

const TypingTest = () => {
  // Fetch the data from the loader using useLoaderData

  const [inputValue, setInputValue] = useState("");
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [words, setWords] = useState<TWords>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://coffee-store-server-ten-ruddy.vercel.app/words"
        );
        const data = await res.json();
        console.log("Fetched data: ", data);
        const fetchedData = data;
        const shuffledWords = fetchedData?.sort(() => Math.random() - 0.5);
        const limitedWords = shuffledWords.slice(0, 300);
        setWords(limitedWords);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <div className="w-16 h-16 border-8 border-t-[#4b7bae] border-[#90bae4]/4 rounded-full animate-spin"></div>
      </div>
    );
  }

  console.log("rendering");

  return (
    <ComponentWrapper>
      <div>
        <Mainheader>Typing Test</Mainheader>
      </div>
      <div className="pt-5 w-3/4 mx-auto text-3xl leading-relaxed flex justify-center">
        <div className="max-h-60 overflow-y-auto">
          <p>
            {words!.map((word, index) => {
              let eachWordColor = "";
              if (typedWords[index] === word?.word) {
                eachWordColor = "text-green-300"; // Correct word color
              } else if (typedWords[index] !== undefined) {
                eachWordColor = "text-red-300"; // Incorrect word color
              }

              return (
                <span key={word?._id} className={`${eachWordColor}`}>
                  <span className="max-h-20 overflow-hidden whitespace-pre-line">
                    {word?.word + " "}
                  </span>
                </span>
              );
            })}
          </p>
        </div>
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
