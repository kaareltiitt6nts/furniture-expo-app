import { COLORS } from "@/global/colors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  onPress?: () => void;
  title?: string;
};

export const AuthHeader = ({ onPress, title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image
          source={require("@/assets/icon/arrow-left.png")}
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 18,
    aspectRatio: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 500,
    color: COLORS.primary,
    paddingLeft: 16,
  },
});
