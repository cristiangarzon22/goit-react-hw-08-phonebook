import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Filter } from 'components/filter/Filter';
import ContactForm from 'components/form/ContactForm';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      gridTemplateColumns="1fr 1fr"
      mt={1}
      bgGradient={[
        'linear(to bottom, #F8F8F8, #E8E8E8)',
        'linear(to top, #E8E8E8, #F8F8F8)',
      ]}
    >
      <ContactForm />

      <Filter />
    </Box>
  );
};

export default Contacts;
