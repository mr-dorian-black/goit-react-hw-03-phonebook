import { StyledFilter } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return <StyledFilter type="string" name="filter" onChange={onChange} />;
};
