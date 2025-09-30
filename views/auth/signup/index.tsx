import { AuthHeader } from "@/components/authheader/authheader";
import { Checkbox } from "@/components/checkbox/checkbox";
import { Button } from "@/components/common/button/button";
import { Input } from "@/components/input/input";
import { LoginOption } from "@/components/loginoption/loginoption";
import { Separator } from "@/components/separator/separator";
import { COLORS } from "@/global/colors";
import { ICONS } from "@/global/icons";
import { StyleSheet, Text, View } from "react-native";

export const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <View style={styles.inputContainer}>
        <Input label="Username" placeholder="Enter your username" />
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Password" placeholder="Enter your password" isPassword />
        <View style={styles.checkboxContainer}>
          <Checkbox label="I agree to the Terms and Conditions" />
        </View>
        <Button title="Sign Up" onPress={() => {}} />
      </View>
      <Separator label="Or sign up with" />
      <View style={styles.otherInputContainer}>
        <LoginOption icon={ICONS.google} />
      </View>
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.footerLink}>Sign In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 48,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 48,
    gap: 16,
  },
  checkboxContainer: {
    marginVertical: 16,
  },
  otherInputContainer: {
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    textAlign: "center"
  },
  footerText: {
    color: COLORS.primary,
    marginTop: 52,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
    paddingLeft: 8
  }
});