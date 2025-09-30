import { COLORS } from "@/global/colors";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  isPassword?: boolean;
};

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onPasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
        />
        {isPassword && (
          <Pressable onPress={onPasswordVisibilityToggle}>
            <Image
              source={
                isPasswordVisible
                  ? require("@/assets/icon/eye-closed.png")
                  : require("@/assets/icon/eye.png")
              }
              style={styles.eyeIcon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: 500,
  },
  inputContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.inputbox,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  input: {
    height: 60,
    flex: 1,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});
