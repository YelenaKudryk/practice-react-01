import PropTypes from 'prop-types';
import { Text, NameText } from './User.styled';

export const User = ({ user: { id, name, email } }) => {
  return (
    <>
      <Text>
        Name: <NameText>{name}</NameText>{' '}
      </Text>
      <Text>
        E-mail: <NameText>{email}</NameText>{' '}
      </Text>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
