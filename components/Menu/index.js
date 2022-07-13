import Link from 'next/link';

import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import Button from 'components/Button';
import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';
import UserDropdown from 'components/UserDropdown';

import menu from 'constans/menu';

const Menu = ({ username, loading = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Otwórz Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          {menu.map(({name, slug}) => (
            <Link href={slug} passHref>
              <S.MenuLink>{name}</S.MenuLink>
            </Link>
          ))}
        </S.MenuNav>
      </MediaMatch>

      {!loading && (
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="Szukaj" />
            </S.IconWrapper>
            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/sign-in" passHref>
                  <Button as="a">Zaloguj</Button>
                </Link>
              ) : (
                <UserDropdown username={username} />
              )}
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Zamknij Menu"
              onClick={() => setIsOpen(false)}
            />
            <S.MenuNav>
              {menu.map(({name, slug}) => (
                <Link href={slug} passHref>
                  <S.MenuLink>{name}</S.MenuLink>
                </Link>
              ))}

              {!!username && (
                <Link href="/profile/me" passHref>
                  <S.MenuLink>Profil</S.MenuLink>
                </Link>
              )}
            </S.MenuNav>

            {!username && (
              <S.RegisterBox>
                <Link href="/logowanie" passHref>
                  <Button fullWidth size="large" as="a">
                    Zaloguj
                  </Button>
                </Link>
                <span>lub</span>
                <Link href="/rejestracja" passHref>
                  <S.CreateAccount title="Zarejestruj">Zarejestruj</S.CreateAccount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu;