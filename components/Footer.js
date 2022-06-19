import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import Button from '@mui/material/Button';

import Link from 'next/link';

import menu from 'constans/menu';
import { platforms, retro } from 'constans/platforms';

const Footer = () => {

  return (
    <Box 
      py={3}
      mt={3}
      sx={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
            <Typography variant="h6">O nas</Typography>
            <Typography>
              Angry Nerds 
            </Typography>
            <List>
              <Button
                href='/kontakt'
                sx={{ color: 'white', display: 'block', p: 0, fontWeight: 400 }}
              >
                kontakt
              </Button>
            </List>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6">Kategorie</Typography>
            <List>
            { menu.map(item => ( 
              <Button
                href={item.slug}
                key={item.name}
                sx={{ color: 'white', display: 'block', p: 0, fontWeight: 400 }}
              >
                {item.name}
              </Button>
             )) }
                
            </List>
          
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6">Platformy</Typography>
            <List>
            { platforms.map(item => ( 
              <Button
                href={item.slug}
                key={item.name}
                sx={{ color: 'white', display: 'block', p: 0, fontWeight: 400 }}
              >
              {item.name}
              </Button>
             )) }
                
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Retro</Typography>
            
            <Grid container>
            { retro.map(({name, children}) => ( 
              <Grid item xs={12} md={3} key={name}>
                <List>
                  <Typography
                    key={name}
                    variant="subtitle1"
                    sx={{ color: 'white', display: 'block', p: 0, textAlign: 'left' }}
                  >
                  {name}
                  </Typography>
                    { 
                      children ? (
                        <List>
                        { children.map(child => (
                            <Button
                              href={child.slug}
                              key={child.name}
                              sx={{ color: 'white', display: 'block', p: 0, fontWeight: 400 }}
                            >
                              {child.name}
                            </Button>
                          ))
                        }
                        </List>
                      ) : null 
                    }
                  </List>
                </Grid>
             )) }
             </Grid>
          </Grid>
        </Grid>
				Copyright © {new Date().getFullYear()} <Link href="https://angry-nerds.pl"><a>Angry Nerds</a></Link> - Wszystkie prawa zastrzeżone.
      </Container>
    </Box>
  );
};

export default Footer;
