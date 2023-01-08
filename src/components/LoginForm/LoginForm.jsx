import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            id="email"
          ></input>
        </Label>
        <Label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            id="password"
          ></input>
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </div>
  );
};
