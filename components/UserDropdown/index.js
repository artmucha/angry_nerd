import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined';
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';

import Dropdown from 'components/Dropdown';

import * as S from './styles';

const UserDropdown = ({ username = 'Artur' }) => {
  const { push } = useRouter();

  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <Link href="/profile/me" passHref>
          <S.Link>
            <AccountCircle />
            <span>Profil</span>
          </S.Link>
        </Link>
        <Link href="/wishlist" passHref>
          <S.Link title="Wishlist">
            <FavoriteBorder />
            <span>Kolekcje</span>
          </S.Link>
        </Link>

        <S.Link
          role="button"
          title="Wyloguj"
          onClick={async () => {
            const data = await signOut({ redirect: false, callbackUrl: '/' })
            push(data.url)
          }}
        >
          <ExitToApp />
          <span>Wyloguj</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown;