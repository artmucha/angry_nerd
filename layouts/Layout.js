import { styled } from '@mui/material/styles';

import Header from 'components/Header';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
}));

const Layout = ({ children }) => {

  return (
    <RootStyle>
      <Header />
      <MainStyle>
        { children }
      </MainStyle>
    </RootStyle>
  );
};

export default Layout;