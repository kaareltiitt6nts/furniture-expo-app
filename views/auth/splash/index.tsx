import { Button } from "@/components/common/button/button";
import { COLORS } from "@/global/colors";
import { Image, StyleSheet, Text, View } from "react-native";

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/splash.png")}
        style={styles.image}
      />

      <Text style={styles.brandText}>You'll find</Text>
      <Text style={[styles.brandText, styles.brandSpan]}>All you need</Text>
      <Text style={styles.brandText}>here!</Text>

      <View style={styles.buttonContainer}>
        <Button title="Sign In" />
        <Button title="Sign Up" type="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  brandText: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.text,
  },
  brandSpan: {
    color: COLORS.secondary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 48,
  },
});
