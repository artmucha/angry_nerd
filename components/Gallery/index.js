import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import { Close } from '@styled-icons/material-outlined/Close';

import Slider from 'components/Slider';

import * as S from './styles';

const commonSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
};

const settings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
};

const modalSettings = {
  ...commonSettings,
  slidesToShow: 1
};

const Gallery = ({ items }) => {
  const slider = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }) => {
      key === 'Escape' && setIsOpen(false)
    };

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <Image
            width={295}
            height={165}
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt="Thumb"
            onClick={() => {
              setIsOpen(true)
              slider.current.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <Image
                width={1200}
                height={675}
                key={`gallery-${index}`}
                src={item.src}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
};

export default Gallery;