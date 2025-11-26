import { HomeHeader } from "@/components/homeheader/homeheader";
import { SettingsButton } from "@/components/settingsbutton/settingsbutton";
import { UserDetails } from "@/components/userdetails/userdetails";
import { ICONS } from "@/global/icons";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const router = useRouter();

  const onLogOut = () => {
    router.push("/(splash)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        title="Profile"
        alignButton="right"
        icon={ICONS.logout}
        onPress={onLogOut}
      />
      <View style={styles.detailsContainer}>
        <UserDetails name="John Doe" email="john.doe@example.com" />
        <SettingsButton
          label="My Listings"
          description="Manage your listings"
          onPress={() => router.push("/settings")}
        />
        <SettingsButton
          label="Settings"
          description="Update your profile settings"
          onPress={() => router.push("/settings")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    paddingHorizontal: 24,
  },
});
