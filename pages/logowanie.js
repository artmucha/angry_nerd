import { styled } from '@mui/material/styles';
import { Stack, Link, Container, Typography } from '@mui/material';

import AuthLayout from 'layouts/AuthLayout';
import AuthForm from 'components/AuthForm';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

const Login = () => (
  <>
    <AuthLayout />
    <Container maxWidth="sm">
      <ContentStyle>
        <Stack sx={{ mb: 5 }}>
          <Typography variant="h4" align="center" gutterBottom>Zaloguj się</Typography>
        </Stack>

        <AuthForm type="login" apiURL="http://localhost:1337/api/auth/local" />

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Nie masz jeszcze konta?&nbsp;
          <Link underline="none" variant="subtitle2" href="/rejestracja">
            Zarejestruj się!
          </Link>
        </Typography>
      </ContentStyle>
    </Container>
  </>
);

export default Login;