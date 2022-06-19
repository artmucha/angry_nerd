import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GameCard from "components/GameCard";
import PostCard from "components/PostCard";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import nookies from 'nookies';

import Layout from "layouts/Layout";
import Carousel from "components/Carousel";

const Category = ({posts, games, currentUser }) => {
  return (
    <Layout currentUser={currentUser}>
      <Container maxWidth="xl">
        <Carousel items={posts} mt={3} />
      </Container>

      <Container maxWidth="lg">
        <Stack alignItems="center">
          <Typography component="h2" variant='h3' sx={ { mt: {xs: 2, sm: 3} } } mb={2} align="center">Wszystkie gry w jednym miejscu</Typography>
          <Typography component="h3" variant='h6' align="center">Oceniaj i recenzuj gry.</Typography>
          <Typography component="h3" variant='h6' mb={2} align="center">Uzyskaj rekomendacje dla każdej platformy.</Typography>
          <Button variant="contained" href="/rejestracja">Dołącz</Button>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant='h3' component='h2' mt={3} mb={2}>Najnowsze recenzje</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h3' component='h2' mt={3} mb={2}>Ostatnio ocenione</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          { posts.map(post => (
            <PostCard key={post.id} post={post} />
            ))
          }
        </Grid>

        <Typography variant='h3' component='h2' mt={3} mb={2}>Aktualności</Typography>

        <Grid container spacing={3}>
          { games.map(game => (
            <GameCard key={game.id} game={game} />
            ))
          }
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {

  const { token } = nookies.get(ctx);

  const res = await fetch(`http://localhost:1337/api/users/me`,{
    headers: {
      'Authorization' : `Bearer ${token}`,
    }
  });
  const user = await res.json();

  const response = await fetch(`http://localhost:1337/api/posts?populate=cover`);
  const { data, meta } = await response.json();

  const gamesRes = await fetch(`http://localhost:1337/api/games`);
  const games = await gamesRes.json();

  return { props: { posts: data, currentUser: user, games: games.data } };
};

export default Category;