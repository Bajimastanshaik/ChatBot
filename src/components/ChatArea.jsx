import React, { useContext } from "react";
import { assets } from "../assets/assets";
import MIC from "../assets/microphone.png";
import PHOTO from "../assets/photo.png";
import { Context } from "./Context";
import BOT from "../assets/robot.png";

function ChatArea() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="flex-1 min-h-screen pb-1 relative px-0.5 sm:px-3 lg:px-8">
      <div className="flex items-center justify-between text-base sm:text-lg p-4 sm:p-6 lg:p-8">
        <p>ChatBot</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {!showResult ? (
          <>
            <div className="mx-4 sm:mx-8 lg:mx-12 my-0 text-3xl sm:text-4xl lg:text-5xl font-extrabold p-3 sm:p-4 lg:p-5 text-gray-400">
              <p>
                <span className="bg-gradient-to-r from-blue-400 via-sky-600 to-red-500 bg-clip-text text-transparent">
                  Hello, debugger
                </span>
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl mt-2">
                How can i help u today
              </p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="mx-4 sm:mx-6 lg:mx-10 my-0 flex items-center gap-3 sm:gap-4 lg:gap-5">
              <img
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex-shrink-0"
                src={assets.user_icon}
                alt=""
              />
              <p className="text-sm sm:text-base break-words">{recentPrompt}</p>
            </div>
            <div className="mx-4 sm:mx-6 lg:mx-10 my-3 flex items-start gap-3 sm:gap-4 lg:gap-5">
              <img
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0"
                src={BOT}
                alt=""
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-black text-sm sm:text-base font-light leading-[1.8] break-words"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-b absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 py-2">
          <div className="search-box flex items-center justify-between gap-2 sm:gap-3 lg:gap-5 bg-gray-300 px-2 sm:px-3 py-2 border rounded-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text "
              placeholder="enter here"
              className="flex-1 bg-transparent outline-none p-1 sm:p-2 text-sm sm:text-base lg:text-lg min-w-0"
            />
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-3.5 flex-shrink-0">
              <img
                src={PHOTO}
                alt=""
                className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
              />
              <img
                src={MIC}
                alt=""
                className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt=""
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
