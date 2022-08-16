import { useRouter } from 'next/router';
import * as S from './styles';

const Pagination = ({page, pageCount}) => {
  const { push, pathname, query } = useRouter();
  const paginationList = [];

  for(let i = 0; i < pageCount; i++) {
    paginationList.push(i)
  };

  const handlePagination = (currentPage) => {
    query.page = currentPage + 1;
    push({
      pathname: pathname,
      query: query,
		});
  };
	
  return (
    <S.Pagination currentPage={page}>
      { pageCount > 1 && paginationList.map(item => (
        <S.Button
          key={item} 
          onClick={() => handlePagination(item)}
        >
          {item + 1}
        </S.Button>
      ))
      }
    </S.Pagination>
  );
};

export default Pagination;