import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilterContacts } from 'redux/contacts/selectors';
import { List, Item, ButtonDelete } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);

  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <span>
            {name}: {number}
          </span>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ButtonDelete>
        </Item>
      ))}
    </List>
  );
};
