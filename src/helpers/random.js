export const randomBool = () => Math.random() > 0.5;

export const randomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
