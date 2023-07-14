import { UserRow } from "./UserRow";
import { User } from "./user.types";

interface UserListProps {
  viewModel: User[];
}

export const UserList = (props: UserListProps) => {
  const { viewModel = [] } = props;

  return (
    <ul>
      {viewModel.length ? (
        viewModel.map((user) => {
          return <UserRow key={user.userId} user={user} />;
        })
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  );
};
