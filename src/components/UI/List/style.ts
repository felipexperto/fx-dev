import styled from 'styled-components';

export const List = styled.ul<{ flexDirection?: string }>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ?? 'row'};
  list-style: none;
  margin: 0;
  padding: 0;
`;
