import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
          Name
          <input type="text" name="name" autoComplete="name" id="name"></input>
        </Label>
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
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};
