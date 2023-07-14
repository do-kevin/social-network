import { UserRowNative } from "./UserRowNative";
import { User } from "./user.types";
import { Text, FlatList } from "react-native";

interface UserListProps {
  viewModel: User[];
}

export const UserListNative = (props: UserListProps) => {
  const { viewModel = [] } = props;

  return (
    <FlatList
      data={viewModel}
      renderItem={(user) => {
        return <UserRowNative key={user.item.userId} user={user.item} />;
      }}
    ></FlatList>
  );
};
