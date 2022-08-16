import { useRouter } from 'next/router';

import Post from 'templates/Post';

import { fetchAPI } from "utils/helpers";
import { getImageUrl } from 'utils/getImageUrl';

const Index = (props) => {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Post {...props} />
};

export async function getStaticPaths() {
  const { data } = await fetchAPI('/posts');

  const paths = data.map(({ attributes }) => ({
    params: { slug: attributes.slug }
  }));

  return { paths, fallback: true };
};

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(`/posts/${params.slug}`);

  if (!data) return { notFound: true };

  return {
    revalidate: 60,
    props: {
      slug: params.slug,
      cover: `${getImageUrl(data.attributes.cover.data.attributes.url)}`,
      pageInfo: {
        id: data.id,
        title: data.attributes.title,
        lead: data.attributes.lead,
        publishedAt: data.attributes.publishedAt,
        type: 'post'
      },
      description: data.attributes.description,
    }
  }
};

export default Index;