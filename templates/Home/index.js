import Base from 'templates/Base';
import { Container } from 'components/Container';
import BannerSlider from 'components/BannerSlider';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import Reviews from 'components/Reviews';
import Ratings from 'components/Ratings';
import Button from 'components/Button';

import * as S from './styles';
import { reviews } from 'constans/fakeData';

const Home = ({ banners, bestGames, newGames, blogPosts }) => (
  <Base>

    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <Container>
      <S.SectionEyeCatcher>
        <Heading size="huge" align="center">
          Wybór gry staje się prosty!
        </Heading>
        <S.Subtitle>
          <strong>Oceniaj i recenzuj gry</strong>
        </S.Subtitle>
        <S.Subtitle>
          Uzyskaj rekomendacje od innych graczy
        </S.Subtitle>
        <Button as="a" href="/rejestracja" size="large">
          Dołącz
        </Button>
      </S.SectionEyeCatcher>
    </Container>

    <S.SectionLight>
      <Showcase title="Najwyżej oceniane" items={bestGames} color="black" />
    </S.SectionLight>

    <Showcase title="Ostatnio ocenione" items={newGames} />

    <S.SectionReviews>
      <Reviews title="Najnowsze recenzje" items={reviews} />
      <Ratings title="Najbardziej aktywni gracze" items={reviews} />
    </S.SectionReviews>

    <Showcase title="Najnowsze na blogu" items={blogPosts} />

  </Base>
)

export default Home;