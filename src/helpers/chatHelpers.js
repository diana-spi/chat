export const lastMsgContact = (contact, messages) => {
  const contactMsgs = messages
    .filter((message) => message.contact === contact.id)
    .sort((a, b) => {
      return a.date - b.date;
    });
  return contactMsgs[contactMsgs.length - 1];
};

export const sortChatByDate = (contacts, messages) => {
  const sortedContacts = contacts
    .filter((contact) => lastMsgContact(contact, messages))
    .sort((a, b) => {
      return lastMsgContact(b, messages)?.date - lastMsgContact(a, messages)?.date;
    });
  return sortedContacts;
};
