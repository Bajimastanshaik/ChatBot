import React, { createContext, useState } from "react";
import run from "../AI/Ai";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayText = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 7 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("<br />");
    let newResponseArray = newResponse2.split("");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayText(i, nextWord + "");
    }
    setLoading(false);
    setInput("");
  };

  const contextValues = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    loading,
    input,
    setInput,
    resultData,
    recentPrompt,
    showResult,
    newChat,
  };

  return (
    <Context.Provider value={contextValues}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
