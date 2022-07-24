import Banner from 'components/Banner';
import Slider from 'components/Slider';

import * as S from './styles';

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  fade: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        fade: false,
      }
    }
  ]
}

const BannerSlider = ({ items }) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider;