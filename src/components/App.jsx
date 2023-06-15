import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Title, ContainerCSS } from './MainContainerCSS';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import LStorage from './storage';

const lStor = new LStorage();
const LSKEY = 'phonebook';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    if (lStor.load(LSKEY)) return lStor.load(LSKEY);
    return [];
  });
  const [filter, setFilter] = useState('');
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    lStor.save(LSKEY, contacts);
    !contacts.length && lStor.remove(LSKEY);
  }, [contacts]);

  const handleInputChange = evt => {
    setFilter(evt.currentTarget.value.trim());
  };

  const handleOnSubmit = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(pContacts => [...pContacts, contact]);
  };

  const deleteEntries = idToDelete => {
    setContacts(pContacts =>
      pContacts.filter(contact => contact.id !== idToDelete)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContainerCSS>
      <Title>Phonebook</Title>
      <Form formSubmit={handleOnSubmit} />
      <Title>Contacts</Title>
      <Filter
        text={filter}
        onChange={handleInputChange}
        isDisabled={!contacts.length}
      />
      {!!filteredContacts.length && (
        <ContactsList contacts={filteredContacts} onDelete={deleteEntries} />
      )}
      <GlobalStyle />
    </ContainerCSS>
  );
};
