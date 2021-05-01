import fs from 'fs/promises'
import path from 'path'
import { v4 as id } from 'uuid';



/*
Раскомментируй и запиши значение
*/
const contactsPath = path.resolve('db/contacts.json');
console.log(contactsPath);


// TODO: задокументировать каждую функцию
 async function listContacts() {
   await fs.readFile(contactsPath)
   .then(data => console.log(data.toString()))
   .catch ((error => console.log(error.message)))
  }


  // listContacts();

 
  
  async function getContactById(contactId) {

    await fs.readFile(contactsPath).then((data) => {
      const arr = JSON.parse(data.toString());
      const findById = arr.find(element => element.id === contactId);
      console.table(findById);
    }).catch((error) => console.log(error.message));

  }

  // getContactById(5);
  
  async function removeContact(contactId) {
    const data = await fs.readFile(contactsPath).then((data) => {
      const content = JSON.parse(data);
      const filterArrById = content.filter(element => element.id !== contactId);
      fs.writeFile(contactsPath, JSON.stringify(filterArrById));
      console.log(filterArrById);
    }).catch((error) => console.log(error.message))
    
  }

  // removeContact(1)
  
  async function addContact(name, email, phone) {
    const data = await fs.readFile(contactsPath).then((data) => {
      const content = JSON.parse(data);
      content.push({ id: id(), name, email, phone })
      fs.writeFile(contactsPath, JSON.stringify(content))
      console.log(content);
       }).then((error) => console.log(error.message));
    
    }

  // addContact('Vektor', 'hro554m@gmail.com', '0986819345');
  


 


export {
listContacts,
getContactById,
removeContact,
addContact
};