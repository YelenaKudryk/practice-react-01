import { User } from '../User/User';
import PropTypes from 'prop-types';

export const UserList = ({ users }) => {
  return users.map(user => {
    return (
      <li key={user.id}>
        <User user={user} />
      </li>
    );
  });
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};
