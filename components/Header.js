import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import Image from 'next/image';

import Link from 'next/link';

import menu from 'constans/menu';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = ({currentUser}) => {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(isOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Image
              width={200}
              height={30}
              src="/logo.png"
              alt="Angry Nerds"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={open}
              onClose={toggleDrawer(false)}
              sx={{
                width: '90%',
                maxWidth: '400px'
              }}
            >
            {menu.map((page) => (
                <Button
                  href={page.slug}
                  key={page.name}
                  sx={{ color: 'white', display: 'block' }}
                >
                  {page.name}
                  </Button>
            ))}
          </Drawer>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Image
              width={200}
              height={30}
              src="/logo.png"
              alt="Angry Nerds"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menu.map((page) => (
              <Button
                href={page.slug}
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          { currentUser ? (
            <>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={currentUser.username} src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <IconButton href="/logowanie" sx={{ p: 0 }}>
              <Avatar alt="Angry Nerd" src="/static/images/avatar/2.jpg" />
            </IconButton>
          )}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
