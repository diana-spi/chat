import contacts from "./contacts";
import moment from "moment";

const messages = [
  {
    id: "1",
    date: moment("2022-08-18 05:26:09").toDate(),
    text: "Hi",
    contact: contacts[0].id,
    income: true,
    isSeen: true,
  },
  {
    id: "2",
    date: moment("2022-08-18 08:51:43").toDate(),
    text: "Good to meet you!",
    contact: contacts[0].id,
    income: false,
    isSeen: true,
  },
  {
    id: "3",
    date: moment("2022-08-18 10:09:08").toDate(),
    text: "Did you just arrive here?",
    contact: contacts[0].id,
    income: true,
    isSeen: true,
  },
  {
    id: "4",
    date: moment("2022-08-18 10:51:43").toDate(),
    text: "Yeah, We arrived last week.",
    contact: contacts[0].id,
    income: false,
    isSeen: true,
  },
  {
    id: "5",
    date: moment("2022-08-18 11:51:43").toDate(),
    text: "It’s exciting! It’s much busier than the last city we lived in. I was working in Seattle for the last 3 years.",
    contact: contacts[0].id,
    income: false,
    isSeen: true,
  },
  {
    id: "6",
    date: moment("2022-08-18 12:51:43").toDate(),
    text: "So what are you doing during the holidays? Any plans?",
    contact: contacts[1].id,
    income: false,
    isSeen: true,
  },
  {
    id: "7",
    date: moment("2022-08-18 12:53:00").toDate(),
    text: "Yes! Actually I’m going on vacation. I’m going to Thailand for 2 weeks with my parents.",
    contact: contacts[1].id,
    income: true,
    isSeen: true,
  },
  {
    id: "8",
    date: moment("2022-08-18 12:55:04").toDate(),
    text: "That’s great! Have you visited Thailand before?",
    contact: contacts[1].id,
    income: false,
    isSeen: true,
  },
  {
    id: "9",
    date: moment("2022-08-18 12:56:43").toDate(),
    text: "I’ve been there a few times. But it will be the first time for my parents.",
    contact: contacts[1].id,
    income: true,
    isSeen: true,
  },
  {
    id: "10",
    date: moment("2022-08-18 12:59:44").toDate(),
    text: "Ooh. How do they feel? I remember taking my parents with me to Mexico. It was a little stressful. Parents are not easy to travel with sometimes.",
    contact: contacts[1].id,
    income: false,
    isSeen: true,
  },
  {
    id: "11",
    date: moment("2022-08-18 13:10:34").toDate(),
    text: "My dad is a nervous traveler but my mom is easy going. As long as they have Google translate and Google maps, they will be okay. We aren’t doing anything too crazy – Just relaxing on the beach for a week and then a few days visiting different cities.",
    contact: contacts[1].id,
    income: true,
    isSeen: true,
  },
  {
    id: "12",
    date: moment("2022-08-18 13:51:53").toDate(),
    text: "That’s great. My parents aren’t so brave. They get nervous leaving the house. How are the beaches?",
    contact: contacts[1].id,
    income: false,
    isSeen: true,
  },
  {
    id: "13",
    date: moment("2022-08-18 13:53:23").toDate(),
    text: "Beautiful. There are a lot more tourists than before but still breathtaking.",
    contact: contacts[1].id,
    income: true,
    isSeen: true,
  },
  {
    id: "14",
    date: moment("2022-08-17 02:42:00").toDate(),
    text: "Oh hello. Is this your dog?",
    contact: contacts[2].id,
    income: true,
    isSeen: true,
  },
  {
    id: "15",
    date: moment("2022-08-17 08:17:13").toDate(),
    text: "Yes, this is Rex.",
    contact: contacts[2].id,
    income: false,
    isSeen: true,
  },
  {
    id: "16",
    date: moment("2022-08-17 08:45:13").toDate(),
    text: "What type of dog is he?",
    contact: contacts[2].id,
    income: true,
    isSeen: true,
  },
  {
    id: "17",
    date: moment("2022-08-17 08:55:16").toDate(),
    text: "He’s a pug.",
    contact: contacts[2].id,
    income: false,
    isSeen: true,
  },
  {
    id: "18",
    date: moment("2022-08-17 09:05:26").toDate(),
    text: "Oh. I should have guessed. He looks quite well-behaved.",
    contact: contacts[2].id,
    income: true,
    isSeen: true,
  },
  {
    id: "19",
    date: moment("2022-08-17 08:05:26").toDate(),
    text: "You said you’re from Norway. How long have you lived here?",
    contact: contacts[7].id,
    income: true,
    isSeen: true,
  },
  {
    id: "20",
    date: moment("2022-08-17 10:05:32").toDate(),
    text: "I moved here in 2017",
    contact: contacts[7].id,
    income: false,
    isSeen: true,
  },
  {
    id: "21",
    date: moment("2022-08-17 11:43:32").toDate(),
    text: "Oh, that’s quite a while. I’ve always wanted to go to Norway. Whereabouts are you from?",
    contact: contacts[7].id,
    income: true,
    isSeen: true,
  },
  {
    id: "22",
    date: moment("2022-08-17 11:44:35").toDate(),
    text: "I’m from Trondheim. Have you heard of it?",
    contact: contacts[7].id,
    income: true,
    isSeen: true,
  },
  {
    id: "23",
    date: moment("2022-08-17 12:09:02").toDate(),
    text: "Yes, I have. A friend of mine lived there, actually. The world’s biggest sundial is in Trondheim, isn’t it?",
    contact: contacts[7].id,
    income: false,
    isSeen: true,
  },
  {
    id: "24",
    date: moment("2022-08-17 12:32:22").toDate(),
    text: "Yes, that’s right! The Trondheim Torg. That’s funny that you know about that.",
    contact: contacts[7].id,
    income: true,
    isSeen: true,
  },
  {
    id: "25",
    date: moment("2022-08-19 06:53:33").toDate(),
    text: "Hey what are you doing? Would you like to come out to play?",
    contact: contacts[1].id,
    income: true,
    isSeen: true,
  },
  {
    id: "26",
    date: moment("2022-08-19 06:56:05").toDate(),
    text: "No. I’m a little busy right now. I’m writing a story for tomorrow’s storytelling competition.",
    contact: contacts[1].id,
    income: false,
    isSeen: true,
  },
  {
    id: "27",
    date: moment("2022-08-19 07:46:05").toDate(),
    text: "You have been working on that since the last week. How much more will you edit it?",
    contact: contacts[1].id,
    income: true,
    isSeen: true,
  },
  {
    id: "28",
    date: moment("2022-08-19 07:56:34").toDate(),
    text: "It’s a suspense story. It has to be perfect or else it will lose its charm.",
    contact: contacts[1].id,
    income: false,
    isSeen: true,
  },
  {
    id: "29",
    date: moment("2022-08-19 07:59:24").toDate(),
    text: "That is true, but I have full faith in your skills. After all, you have been winning this competition for so many years now.",
    contact: contacts[1].id,
    income: true,
    isSeen: true,
  },
  {
    id: "30",
    date: moment("2022-08-19 08:04:24").toDate(),
    text: "That’s true. But that does not give me a reason to be careless with my work, does it?",
    contact: contacts[1].id,
    income: false,
    isSeen: true,
  },
  {
    id: "31",
    date: moment("2022-08-19 09:04:24").toDate(),
    text: "That’s true. But that does not give me a reason to be careless with my work, does it?",
    contact: contacts[7].id,
    income: false,
    isSeen: true,
  },
];

export default messages;
