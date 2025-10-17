import { HomeHeader } from "@/components/homeheader/homeheader";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const FavoritesScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader title="Favorites" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
