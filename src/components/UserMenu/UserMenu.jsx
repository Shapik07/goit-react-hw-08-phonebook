import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Text, Button, Container } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Text>Welcome, {user.email}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Container>
  );
};
