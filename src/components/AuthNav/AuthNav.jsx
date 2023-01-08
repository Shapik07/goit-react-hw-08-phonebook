import { Link, Box } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Box>
  );
};
