import "./MessageContainer.scss";

function MessageContainer({ text, type }) {
  return <div className={`message-container message-container--${type}`}>{text}</div>;
}
export default MessageContainer;
