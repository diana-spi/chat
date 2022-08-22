import "./App.scss";
import Chat from "./features/Chat/Chat";
import Login from "./features/Login/Login";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import messages from "./data/message";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/chat"
              element={
                <MessagesContext.Provider value={value}>
                  <Chat />
                </MessagesContext.Provider>
              }
            />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
