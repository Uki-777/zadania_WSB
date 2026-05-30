const contacts = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true },
  { name: "Tomasz Kowal", phone: "503-111-222", city: "Gliwice", favorite: false }
];

function getContactsByCity(city) {
  return contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
}

function getFavoriteContacts() {
  return contacts.filter(contact => contact.favorite);
}

function formatContacts(contactList) {
  return contactList.map(contact => `${contact.name} — ${contact.phone}`);
}

function searchByName(text) {
  return contacts.filter(contact => contact.name.toLowerCase().includes(text.toLowerCase()));
}

console.log("Kontakty z Katowic:", formatContacts(getContactsByCity("Katowice")));
console.log("Ulubione kontakty:", formatContacts(getFavoriteContacts()));
console.log("Wyszukiwanie po nazwie:", formatContacts(searchByName("anna")));
