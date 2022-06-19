import { styled } from '@mui/material/styles';

import Header from 'components/Header';
import Footer from 'components/Footer';

const RootStyle = styled('div')({
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  marginTop: theme.spacing(3)
}));

const Layout = ({ children, currentUser }) => {

  return (
    <RootStyle>
      <Header currentUser={currentUser} />
      <MainStyle>
        { children }
      </MainStyle>
      <Footer />
    </RootStyle>
  );
};

export default Layout;