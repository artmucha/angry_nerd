import Auth from 'templates/Auth';
import FormSignIn from 'components/FormSignIn';

const SignIn = () => {
  return (
    <Auth title="Zaloguj się">
      <FormSignIn />
    </Auth>
  )
};

export default SignIn;