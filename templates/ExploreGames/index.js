import { useRouter } from 'next/router';

import { parseQueryStringToFilter } from 'utils/filters';
import { gamesMapper } from 'utils/mappers';

import Base from 'templates/Base';

import ExploreSidebar from 'components/ExploreSidebar';
import Card from 'components/Card';
import { Grid } from 'components/Grid';
import Empty from 'components/Empty';
import Pagination from 'components/Pagination';

import * as S from 'components/Explore';

const ExploreGames = ({ filterItems, games, platform, pagination }) => {
  const { push, query } = useRouter();

  if (!games) return <p>loading...</p>

  const items = gamesMapper(games);

  const handleFilter = (items) => {
    const genres = items.genres ? { genres : items.genres } : {};
    push({
      pathname: `${platform}`,
      query: {...genres}
    })
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
          {games?.length ? (
            <>
              <Grid>
                {items.map((item) => (
                  <Card key={item.id} {...item} />
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

export default ExploreGames;