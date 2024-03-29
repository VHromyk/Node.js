import { listContacts, getContactById, addContact, removeContact } from './contacts.js'


import { Command } from 'commander/esm.mjs';
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv= program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        listContacts();
      break;

    case 'get':
      getContactById(Number(id));
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(Number(id));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

