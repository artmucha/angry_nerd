import { alpha, styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import Link from 'next/link';

import { formatDate } from 'utils/helpers';

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: '60vh'
});

const TitleStyle = styled(Typography)({
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
});

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const CarouselItem = ({ post }) => {

  return (
    <Grid item xs={12}>
      <Link href={'/'}>
      <a>
        <Card>
          <CardMediaStyle
            sx={{
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
              },
            }}
          >
            <CoverImgStyle alt={post.attributes.title} src={`http://localhost:1337${post.attributes.cover.data.attributes.url}`} />
          </CardMediaStyle>

          <CardContent
            sx={{
              pt: 4,
              pl: { md: 6 },
              bottom: 24,
              width: '100%',
              position: 'absolute',
            }}
          >
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: 'text.disabled', display: 'block' }}
            >
              { formatDate(post.attributes.createdAt) }
            </Typography>

            <TitleStyle component="h2" variant="h3">
                {post.attributes.title}
            </TitleStyle>
          </CardContent>
        </Card>
        </a>     
      </Link>
    </Grid> 
  );
};

export default CarouselItem;