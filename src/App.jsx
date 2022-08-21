import "./App.scss";
import Chat from "./features/Chat/Chat";
import { createContext, useEffect, useState } from "react";
import messages from "./data/message";

export const MessagesContext = createContext({
  messages,
  setMessages: () => {},
});
const messagesParse = JSON.parse(localStorage.getItem("messages"));

function App() {
  const [contextMessages, setContextMessages] = useState(
    messagesParse
      ? messagesParse.map((message) => {
          return {
            ...message,
            date: new Date(message.date),
          };
        })
      : messages
  );
  const value = { messages: contextMessages, setMessages: setContextMessages };

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(contextMessages));
  }, [contextMessages]);

  return (
    <div className="App">
      <MessagesContext.Provider value={value}>
        <Chat />
      </MessagesContext.Provider>
    </div>
  );
}

export default App;
