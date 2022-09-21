import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	${media.greaterThan('medium')`
		flex-direction: row;
	`};
`;