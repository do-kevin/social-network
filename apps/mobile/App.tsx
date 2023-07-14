import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { UserPresenter } from "shared/user/user.presenter";
import { UserListNative } from "react-ui/user/UserListNative";

export default function App() {
  const [viewModel, setViewModel] = useState([]);

  const userPresenter = new UserPresenter();

  useEffect(() => {
    async function load() {
      await userPresenter.load((vm: any) => {
        setViewModel(vm);
      });
    }
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello World!</Text>
      <UserListNative viewModel={viewModel} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
