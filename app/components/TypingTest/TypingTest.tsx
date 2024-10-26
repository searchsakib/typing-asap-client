import { KeyboardEvent, useState } from "react";
import Mainheader from "../ui/Mainheader";
import ComponentWrapper from "../ui/ComponentWrapper";
import { json, useLoaderData } from "@remix-run/react";
// import { nanoid } from "nanoid";

export const loader = async () => {
  const response = await fetch(
    "https://coffee-store-server-ten-ruddy.vercel.app/words"
  );
  console.log("This is RESPONSE" + response);
  if (!response.ok) throw new Error("Failed to fetch data");
  const wordData = await response.json();
  console.log("My fetched DATA:" + wordData);
  return json(wordData);
};

const TypingTest = () => {
  const loaderData = useLoaderData<typeof loader>();
  const wordData = loaderData?.wordData;

  // if (!wordData) {
  //   return <div>Loading...</div>;
  // }
  console.log("THE DATA: " + wordData);

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
