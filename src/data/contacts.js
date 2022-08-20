import { randomBool } from "../helpers/random";

const contacts = [
  {
    id: "1",
    name: "John Smith",
    online: randomBool(),
    avatar: "img/avatars/avatar-1.jpeg",
  },
  {
    id: "2",
    name: "Jaky Doe",
    online: randomBool(),
    avatar: "img/avatars/avatar-2.jpeg",
  },
  {
    id: "3",
    name: "Jacky Black",
    online: randomBool(),
    avatar: "img/avatars/avatar-3.jpeg",
  },
  {
    id: "4",
    name: "July Brown",
    online: randomBool(),
    avatar: "img/avatars/avatar-4.jpeg",
  },
  {
    id: "5",
    name: "Katy Blue",
    online: randomBool(),
    avatar: "img/avatars/avatar-5.jpeg",
  },
  {
    id: "6",
    name: "Mary Brown",
    online: randomBool(),
    avatar: "img/avatars/avatar-6.jpeg",
  },
  {
    id: "7",
    name: "Zoe Smith",
    online: randomBool(),
    avatar: "img/avatars/avatar-7.jpeg",
  },
  {
    id: "8",
    name: "Mary Black",
    online: randomBool(),
    avatar: null,
  },
];

export default contacts;
