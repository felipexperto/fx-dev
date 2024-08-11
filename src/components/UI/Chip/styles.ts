import styled from 'styled-components';

const Chip = styled.div<{ bgColor: string, borderColor: string }>`
  background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
  border-color: ${({ borderColor, theme }) => theme.colors[borderColor]};
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
`;

export { Chip };
