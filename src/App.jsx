import "./App.scss";
import Chat from "./features/Chat/Chat";
import { createContext } from "react";
import messages from "./data/message";

export const MessagesContext = createContext(messages);

function App() {
  return (
    <div className="App">
      <MessagesContext.Provider value={messages}>
        <Chat />
      </MessagesContext.Provider>
    </div>
  );
}

export default App;
