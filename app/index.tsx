import { COLORS } from "@/global/colors";
import { SplashScreen } from "@/views/auth/splash";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background
  }
})