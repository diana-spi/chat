export const audio = new Audio("/audio/notification.mp3");

export const playNotification = () => {
  audio.preload = "auto";
  audio.addEventListener("canplaythrough", (event) => {
    audio.play();
  });
  audio.load();
};
