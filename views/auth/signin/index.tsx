import { AuthHeader } from "@/components/authheader/authheader";
import { Checkbox } from "@/components/checkbox/checkbox";
import { Button } from "@/components/common/button/button";
import { Input } from "@/components/input/input";
import { LoginOption } from "@/components/loginoption/loginoption";
import { Separator } from "@/components/separator/separator";
import { COLORS } from "@/global/colors";
import { ICONS } from "@/global/icons";
import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const SignInScreen = () => {
  const router = useRouter();

  const onBack = () => {
    router.navigate("/splash");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign In" onPress={onBack} />
        <View style={styles.inputContainer}>
          <Input label="Email" placeholder="Enter your email" />
          <Input
            label="Password"
            placeholder="Enter your password"
            isPassword
          />
          <View style={styles.checkboxContainer}>
            <Checkbox label="Remember Password" />
          </View>
          <Button title="Sign In" onPress={() => {}} />
        </View>
        <Separator label="Or sign in with" />
        <View style={styles.otherInputContainer}>
          <LoginOption icon={ICONS.google} />
        </View>
        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.footerLink}>Sign Up</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 48,
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
    textAlign: "center",
  },
  footerText: {
    color: COLORS.primary,
    marginTop: 52,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
    paddingLeft: 8,
  },
});
