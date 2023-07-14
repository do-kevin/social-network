import { User } from "./user.types";

interface UserRowProps {
  user: User;
}

export const UserRow = (props: UserRowProps) => {
  const { user } = props;

  return (
    <li>
      {user.firstName} {user.lastName} {user.email} {user.role}
    </li>
  );
};
