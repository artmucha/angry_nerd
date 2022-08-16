import ExploreBlog from 'templates/ExploreBlog';

import { categoryFields } from 'utils/filters/fields';
import { fetchAPI } from 'utils/helpers';

const Posts = (props) => <ExploreBlog {...props} />

export async function getServerSideProps({ query }) {

  const page = query.page ?? 1;

  const filterCategories = {
    title: 'Kategorie',
    name: 'categories',
    type: 'radio',
    fields: categoryFields
  };

  const filterItems = [
    filterCategories
  ];

  const posts = await fetchAPI('/posts', { 
    populate: ['cover', 'meta'],
    filters: {
      categories: {
        slug: {
          $contains: query.categories,
        },
      },
    },
    sort: ['publishedAt:desc'],
    pagination: {
      page: page,
      pageSize: 12,
    },
  });

  return {
    props: {
      posts: posts.data,
      filterItems,
      pagination: posts.meta.pagination
    }
  }
};

export default Posts;