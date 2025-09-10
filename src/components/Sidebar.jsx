import React, { useContext, useState } from "react";
import MENU from "../assets/menu.png";
import PLUS from "../assets/plus-sign.png";
import "./sidebar.css"
import MESSAGE from "../assets/message.png";
import Q from "../assets/q.png";
import SETTING from "../assets/settings.png";
import HISTORY from "../assets/history.png";
import { Context } from "./Context";

function Sidebar() {
  const [menu, setMenu] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar ">
      <div className="top">
        <img
          onClick={() => setMenu((prev) => !prev)}
          src={MENU}
          alt=""
          className="menu"
        />
        <div
          onClick={() => newChat()}
          className="new-chat"
        >
          <img
            src={PLUS}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
          />
          {menu ? (
            <p className="">New chat</p>
          ) : null}
        </div>
        {menu ? (
          <div className="recent">
            <p className="recent-title">
              Recent
            </p>
            <div className="flex flex-row items-start gap-2.5  cursor-pointer  ">
              {prevPrompts.map((item, index) => {
                return (
                  <div className="flex gap-2 bg-[#bcbcbc] p-2.5 pr-10 rounded-4xl"
                    key={index}
                    onClick={() => loadPrompt(item)}
                    
                  >
                    <img
                      src={MESSAGE}
                      alt=""
                      
                    />
                    <p >{item.slice(0, 18)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry flex gap-2 mb-2">
          <img src={Q} alt="" className="flex"/>
          {menu ? (
            <p className="flex ">Help</p>
          ) : null}
        </div>
        <div className="bottom-item recent-entry flex gap-2 mb-2 ">
          <img
            src={HISTORY}
            alt=""
           
          />
          {menu ? (
            <p >Activity</p>
          ) : null}
        </div>
        <div className="bottom-item recent-entry flex gap-2 mb-2">
          <img
            src={SETTING}
            alt=""
           
          />
          {menu ? (
            <p >Settings</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
