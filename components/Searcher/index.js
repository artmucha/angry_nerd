import TextField from "components/TextField";
import Button from "components/Button";
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import * as S from './styles';

const Searcher = () => (
	<>
    <S.Wrapper action="/gry">
			<TextField
				name="title"
				placeholder="Szukaj tytułów..."
				type="search"
				icon={<SearchIcon />}
			/>
			<Button type="submit">Szukaj</Button>
		</S.Wrapper>
	</>
)

export default Searcher;