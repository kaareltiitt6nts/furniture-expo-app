import { HomeHeader } from "@/components/homeheader/homeheader";
import { SettingsButton } from "@/components/settingsbutton/settingsbutton";
import { UserDetails } from "@/components/userdetails/userdetails";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserParam } from "@/components/userparam/userparam";
import { SettingsGroup } from "@/components/settingsgroup/settingsgroup";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/global/colors";

export default function SettingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader title="Settings" />
      <View style={styles.detailsContainer}>
        <UserDetails name="John Doe" email="john.doe@example.com" />
        <SettingsGroup
          title={"Personal Information"}
          icon={
            <Ionicons
              name={"create-outline"}
              size={24}
              color={COLORS.inputbox}
            />
          }
        >
          <UserParam label={"Name"} value={"John Doe"} />
          <UserParam label={"Email"} value={"john.doe@example.com"} />
        </SettingsGroup>
        <SettingsGroup title={"Help Center"}>
          <SettingsButton label={"FAQ"} />
          <SettingsButton label={"Contact Us"} />
          <SettingsButton label={"Privacy & Terms"} />
        </SettingsGroup>
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
