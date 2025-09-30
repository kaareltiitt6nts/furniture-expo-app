import { COLORS } from "@/global/colors";
import { Image, ImageProps, Pressable, StyleSheet } from "react-native";

type LoginOptionProps = {
  onPress?: () => void;
  icon: ImageProps;
};

export const LoginOption = ({ onPress, icon }: LoginOptionProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={icon} tintColor={"#fff"} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent,
    paddingVertical: 20,
    paddingHorizontal: 56,
    borderRadius: 14,
  },
  icon: {
    height: 32,
    aspectRatio: 1,
  },
});
