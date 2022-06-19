import { styled } from '@mui/material/styles';
import { Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import SvgIconStyle from 'components/SvgIconStyle';
import { formatDate } from 'utils/helpers';

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});

const TitleStyle = styled(Typography)({
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const LeadStyle = styled(Typography)(({ theme }) => ({
  height: 66,
  overflow: 'hidden',
  color: theme.palette.text.disabled, 
  display: 'block', 
  WebkitLineClamp: 3,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
}));

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2)
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: theme.spacing(2),
  color: theme.palette.text.disabled
}));

const PostCard = ({ post }) => {
  const { title, lead, cover, slug, createdAt } = post.attributes;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link href={`/blog/${slug}`}>
        <a title={title}>
          <Card>
            <CardMediaStyle>
              <SvgIconStyle
                color="paper"
                src="avatar-shape.svg"
                sx={{
                  width: 80,
                  height: 36,
                  zIndex: 9,
                  bottom: -15,
                  position: 'absolute',
                }}
              />
              <AvatarStyle
                alt={'Artur'}
                src={'artur'}
              />
              <Image 
                alt={title} 
                src={`http://localhost:1337${cover.data.attributes.formats.small.url}`} 
                layout="fill"
                objectFit="cover"
              />
            </CardMediaStyle>

            <CardContent
              sx={{
                pt: 4,
                px: 2,
              }}
            >

              <Typography
                gutterBottom
                variant="caption"
                sx={{ color: 'text.disabled', display: 'block' }}
              >
                { formatDate(createdAt) }
              </Typography>

              <TitleStyle component="h3" variant="subtitle1">
                {title}
              </TitleStyle>

              <LeadStyle
                gutterBottom
                component="h4"
                variant="subtitle2"
                dangerouslySetInnerHTML={{ __html: lead }}
              >
              </LeadStyle>

              {/* <InfoStyle>
                { categories.map((category, index) => (
                  <Link 
                    key={index}
                    variant="caption"
                    underline="hover"
                    href={`/kategoria/${category.slug}`}
                    sx={{
                      ml: index === 0 ? 0 : 1.5,
                      color: 'grey.500'
                    }}
                  >
                    { category.name }
                  </Link>
                )) }
              </InfoStyle> */}
              
            </CardContent>
          </Card>
        </a>
      </Link>
    </Grid>
  );
};

export default PostCard;