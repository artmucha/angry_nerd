import Dropdown from 'components/Dropdown';
import Button from 'components/Button';

import useRequest from 'hooks/useRequest';
import collections from 'constans/collections';

import * as S from './styles';

const CollectionDropdown = (token, gameId) => {
	const [doRequest, status] = useRequest();

	const handleCollection = async(colId, gameId) => {
		await doRequest({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/users/1`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      body: {
        data: {
          games: gameId,
					collections: colId
        } 
      }
      // onSuccess: () => router.push('/')
    });
	};

  return (
    <Dropdown
      title={
        <Button  
					minimal
          size="large" 
        >
          Dodaj do kolekcji
        </Button>
      }
    >
			{
				collections.map(col => <S.Button key={col.id} onClick={() => handleCollection(col.id, gameId)}>{col.name}</S.Button>)
			}
    </Dropdown>
  )
}

export default CollectionDropdown;