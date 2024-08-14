import styled from 'styled-components';

export const List = styled.ul<{ flexDirection: string | undefined }>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'row'};
  list-style: none;
  margin: 0;
  padding: 0;
`;
