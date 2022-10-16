import styled from 'styled-components/macro';

const BioWrapper = styled.div`
  align-items: flex-start;
  display: flex;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightgrey};
  font-family: 'Inter', sans-serif;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
const Intro = styled.div`
  color: ${({ theme }) => theme.colors.lightgrey};
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
`;
const Name = styled.div`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25em;
`;

export { BioWrapper, Description, Intro, Name };
