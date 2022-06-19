import { styled } from '@mui/material/styles';
import { Container, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Layout from 'layouts/Layout';

const Cover = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadiusMd,
  position: 'relative',
  zIndex: 0,
  overflow: 'hidden'
}));

const CoverMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const CoverContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  padding: theme.spacing(3),
}));

const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const Article = ({post}) => {
  const { title,  cover, slug } = post.attributes;
  const router = useRouter();

  if(!router.isFallback && !slug) {
      return <p>Jakiś błąd!</p>;
  };

  return (
    <Layout>
      <Container maxWidth={'xl'}>
        <Cover>
          <CoverMediaStyle
            sx={{
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 9 / 16)'
              },
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
              }
            }}
          >
            <CoverImgStyle alt={title} src={cover} />
          </CoverMediaStyle>

          <CoverContent
            sx={{
              p: {
                xs: 3,
                sm: 4
              },
            }}
          >

            <Typography
              color="common.white"
              variant="h1"
              sx={{
                typography: 'h4'
              }}
            >
              {title}
            </Typography>
          </CoverContent>
        </Cover>
      </Container>
    </Layout>
  ) 
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/posts`);
  const { data } = await res.json();

  const paths = data.map(post => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: true }
};

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:1337/api/posts/${params.slug}`);
    const { data } = await res.json();
  
    return {
      props: { post: data }
    };
};

export default Article;