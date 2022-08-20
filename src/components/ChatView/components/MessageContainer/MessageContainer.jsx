import "./MessageContainer.scss";

function MessageContainer({ message, type }) {
  return <div className={`message-container message-container--${type}`}>{message}</div>;
}
export default MessageContainer;
