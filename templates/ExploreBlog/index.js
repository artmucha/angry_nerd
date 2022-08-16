import { useRouter } from 'next/router';

import { parseQueryStringToFilter } from 'utils/filters';
import { getImageUrl } from 'utils/getImageUrl';

import Base from 'templates/Base';

import ExploreSidebar from 'components/ExploreSidebar';
import Card from 'components/Card';
import { Grid } from 'components/Grid';
import Empty from 'components/Empty';
import Pagination from 'components/Pagination';

import * as S from 'components/Explore';

const ExploreBlog = ({ posts, filterItems, pagination }) => {
  const { push, query } = useRouter();

  if (!posts) return <p>loading...</p>

  const handleFilter = (items) => {
    push({
      pathname: '/blog',
      query: items
    })
    return
  };

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {posts.length ? (
            <>
              <Grid>
                {posts.map((item) => (
                  <Card
                    id={item.id}
                    key={item.attributes.slug}
                    title={item.attributes.title}
                    slug={`/blog/${item.attributes.slug}`}
                    img={`${getImageUrl(item.attributes.cover.data.attributes.url)}`}
                  />
                ))}
              </Grid>
              <Pagination {...pagination} />
            </>
          ) : (
            <Empty
              title=":("
              description="Niestety wygląda na to, że nic tu nie ma"
              hasLink
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
};

export default ExploreBlog;