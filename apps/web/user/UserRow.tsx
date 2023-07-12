interface UserRowProps {
  user: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
}

export const UserRow = (props: UserRowProps) => {
  const { user } = props;

  return (
    <li>
      {user.firstName} {user.lastName} {user.email} {user.role}
    </li>
  );
};
