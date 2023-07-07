import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import { selectContacts } from '../../redux/contacts/selectors';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handlerSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warn(`${name} is alredy in contacts.`);
    }

    dispatch(addContact({ name, number }));

    form.reset();
  }

  return (
    <Box
      maxW="600px"
      mx="auto"
      mt={24}
      bgGradient={[
        'linear(to-tr, gray.400, gray.200)',
        'linear(to-t, gray.200, gray.100)',
        'linear(to-b, gray.100, gray.300)',
      ]}
      height={300}
      borderRadius="5px"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
    >
      <form onSubmit={handlerSubmit}>
        <ul>
          <li>
            <p>Name</p>

            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="name"
              variant="flushed"
              borderBottom="1px solid grey"
            />
          </li>
          <li>
            <p>Contact</p>

            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Phone number"
              variant="flushed"
              borderBottom="1px solid grey"
            />
          </li>
        </ul>

        <Button type="submit" colorScheme="blue" mx="80px" mt={4}>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
