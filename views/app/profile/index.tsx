import { HomeHeader } from "@/components/homeheader/homeheader";
import { SettingsButton } from "@/components/settingsbutton/settingsbutton";
import { UserDetails } from "@/components/userdetails/userdetails";
import { ICONS } from "@/global/icons";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProfileScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        title="Profile"
        showButton
        alignButton="right"
        icon={ICONS.logout}
      />
      <View style={styles.detailsContainer}>
        <UserDetails name="John Doe" email="john.doe@example.com" />
        <SettingsButton
          label="My Listings"
          description="Manage your listings"
          onPress={() => console.log("Navigate to Listings")}
        />
        <SettingsButton
          label="Settings"
          description="Update your profile settings"
          onPress={() => console.log("Navigate to Settings")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    paddingHorizontal: 24,
  },
});
