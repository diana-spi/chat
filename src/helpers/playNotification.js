export const playNotification = () => {
  const audio = new Audio("/audio/notification.mp3");
  audio.preload = "auto";
  audio.addEventListener("canplaythrough", (event) => {
    audio.play();
  });
  audio.load();
};
