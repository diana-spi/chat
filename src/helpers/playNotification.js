export const playNotification = () => {
  const audio = new Audio("/audio/notification.mp3");
  audio.addEventListener("canplaythrough", (event) => {
    audio.play();
  });
};
