import contacts from "../data/contacts";
import messages from "../data/message";

//const lastActiveChat = (contact) => {};

export const lastMsgContact = (contact) => {
  const contactMsgs = messages
    .filter((message) => message.contact === contact.id)
    .sort((a, b) => {
      return a.date - b.date;
    });
  return contactMsgs[contactMsgs.length - 1];
};

export const sortChatByDate = () => {
  const sortedContacts = contacts.sort((a, b) => {
    return lastMsgContact(b)?.date - lastMsgContact(a)?.date;
  });
  return sortedContacts;
};
