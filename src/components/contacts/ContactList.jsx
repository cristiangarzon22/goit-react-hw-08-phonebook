import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectContactsFilter,
} from '../../redux/contacts/selectors';
import { Box } from '@chakra-ui/react';
import { Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';

export function ContactList() {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const dispatch = useDispatch();

  const handleDelete = contact => {
    dispatch(deleteContact(contact.id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <Box
      maxW="400px"
      mt={1}
      bgGradient={[
        'linear(to-tr, #F5F5F5, #ECECEC)',
        'linear(to-t, #ECECEC, #DCDCDC)',
        'linear(to-b, #DCDCDC, #F0F0F0)',
      ]}
      height="auto"
      borderRadius="5px"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
    >
      <List>
        {visibilityContacts.map(contact => (
          <ListItem key={contact.id}>
            <ListIcon as={MdSettings} color="green.500" />
            {contact.name}: <span>{contact.number}</span>
            <Button
              colorScheme="teal"
              variant="ghost"
              onClick={() => handleDelete(contact)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
