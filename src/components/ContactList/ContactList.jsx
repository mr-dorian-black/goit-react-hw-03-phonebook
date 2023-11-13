import { StyledList, StyledButton } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <StyledList>
      {items.map(item => {
        return (
          <li key={item.id}>
            {item.name}: {item.number}{' '}
            <StyledButton type="button" onClick={() => onDelete(item.id)}>
              Delete
            </StyledButton>
          </li>
        );
      })}
    </StyledList>
  );
};
