import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import Image from 'next/image';

const GameCard = ({ game }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link href={'/'}>
        <a title={game.attributes.title}>
          <Card sx={{ display: 'flex', p: 2 }}>
            <Box sx={{ 
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'column', 
              minWidth: 120, 
              width: 120, 
              height: 120 
            }}>
              <Image
                src={game.attributes.cover}
                alt={game.attributes.title}
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', pt: 0, pr: 0 }}>
                <Typography component="h3" variant="subtitle1">
                  {game.attributes.title}
                </Typography>
                <Typography component="h4" variant="subtitle2" color="text.disabled">
                  Wydano: {game.attributes.released}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </a>
      </Link>
    </Grid>
  )
}

export default GameCard;