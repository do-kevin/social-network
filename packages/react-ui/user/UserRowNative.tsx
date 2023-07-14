import { User } from "./user.types";
import { Text } from "react-native";

interface UserRowProps {
  user: User;
}

export const UserRowNative = (props: UserRowProps) => {
  const { user } = props;

  return (
    <Text>
      {user.firstName} {user.lastName} {user.email} {user.role}
    </Text>
  );
};
