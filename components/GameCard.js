import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import Link from 'next/link';
import Image from 'next/image';

const GameCard = ({ game }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={`/gry/playstation4/${game.attributes.slug}`}>
        <a title={game.attributes.title}>
          <Card sx={{ display: 'flex', p: 2 }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center'
            }}>
              <Box sx={{ 
                position: 'relative', 
                minWidth: 100, 
                width: 100, 
                height: 100 
              }}>
                <Image
                  src={game.attributes.cover}
                  alt={game.attributes.title}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              { game.attributes.rating && 
                <Chip label={game.attributes.rating} color="primary" variant="outlined" sx={{ mt: 1, px: 1 }} />
              }
            </Box>
            <CardContent sx={{ flex: '1 0 auto', pt: 0, pr: 0, pl: 2 }}>
              <Typography component="h3" variant="subtitle1">
                {game.attributes.title}
              </Typography>
              <Typography component="h4" variant="subtitle2" color="text.disabled">
                Wydano: {game.attributes.released}
              </Typography>
            </CardContent>
          </Card>
        </a>
      </Link>
    </Grid>
  )
}

export default GameCard;