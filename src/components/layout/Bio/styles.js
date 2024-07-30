import styled from 'styled-components';

const BioWrapper = styled.div`
  align-items: flex-start;
  display: flex;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightgrey};
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
const Intro = styled.div`
  color: ${({ theme }) => theme.colors.lightgrey};
  display: block;
  font-size: 0.85rem;
  text-transform: uppercase;
`;
const Name = styled.div`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25em;
`;

export { BioWrapper, Description, Intro, Name };
