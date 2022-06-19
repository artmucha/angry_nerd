import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import StarIcon from '@mui/icons-material/Star';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Layout from 'layouts/Layout';
import collections from "constans/collections";
import useRequest from 'hooks/useRequest';

const Game = ({game, platform}) => {
  const { gameId, title,  cover, slug, released, images, platforms } = game.attributes;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [image, setImage] = useState('');

  const [doRequest, error, status] = useRequest({
    url: `http://localhost:1337/api/games/${game.id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleImageToggle = (image) => {
    setImage(image);
    setOpen(!open);
  };

  const handleRatingToggle = () => {
    setOpenRating(!openRating);
  };

  const handleAddToCollection = async (collection) => {
    await doRequest({data: collection });
  };

  if(!router.isFallback && !slug) {
      return <p>Jakiś błąd!</p>;
  };

  return (
    <Layout>
      <Container maxWidth={'lg'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Paper sx={{ p: 2 }}>
              <Stack direction="row" spacing={2}>
                <Box sx={{ 
                  position: 'relative', 
                  minWidth: 100, 
                  width: 120, 
                  height: 150 
                }}>
                  <Image
                    src={cover}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                <Box>
                  <Typography component="h4" variant="overline" color="text.disabled">
                    {platform}
                  </Typography>
                  <Typography component="h1" variant="h4">{title}</Typography>
                  <Typography component="h4" variant="body2" color="text.disabled">
                    Wydana: {released}
                  </Typography>
                  <Button variant="outlined" onClick={handleOpenMenu} sx={{ mt: 2 }}>
                    Dodaj do kolekcji
                  </Button>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-collection"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                  >
                    {collections.map((collection) => (
                      <MenuItem key={collection.id} onClick={() => handleAddToCollection(collection)}>
                        <Typography textAlign="center">{collection.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <StarIcon sx={{ fontSize: '4rem', color: 'orange'}} />
              <Typography component="h4" variant="h1">9.0</Typography>
              <Box>
                <Typography component="h4" variant="subtitle2">Wybitna!</Typography>
                <Typography component="h4" variant="subtitle2">Średnia z 30 ocen</Typography>
              </Box>
            </Stack>
            <Button variant="outlined" color="warning" onClick={handleRatingToggle} sx={{ mt: 2 }}>
              Oceń
            </Button>
          </Paper>
          </Grid>
        </Grid>
        <Paper sx={{ display: 'flex', p: 2, mt: 3 }}>
          <Grid container spacing={2}>
            { images.map(img => 
              <Grid item xs={12} md={4} lg={3}>
                <Image src={img.url} alt={title} width={400} height={250} layout="intrinsic" onClick={() => handleImageToggle(img.url)} />
              </Grid>
            ) }
          </Grid>
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Typography>Gra dostępna również na</Typography>
            <Grid container flexDirection="column">
            { platforms.data.map(platform => (
              <Grid item xs={12} key={platform.attributes.id}>
                <Typography>{platform.attributes.name}</Typography>
              </Grid>
              ))
            }
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleImageToggle}
      >
        <img src={image} alt={title} />
      </Dialog>

      <Dialog
        maxWidth="lg"
        open={openRating}
        onClose={handleRatingToggle}
      >
        <DialogContent>

        </DialogContent>
      </Dialog>
    </Layout>
  ) 
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/games`);
  const { data } = await res.json();

  const paths = data.map(game => ({
    params: { platform: 'ps4', slug: game.attributes.slug },
  }));

  return { paths, fallback: true }
};

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:1337/api/games/${params.slug}?populate=platforms`);
    const { data } = await res.json();
  
    return {
      props: { game: data, platform: params.platform }
    };
};

export default Game;