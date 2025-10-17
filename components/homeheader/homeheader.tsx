import { COLORS } from "@/global/colors";
import { ICONS } from "@/global/icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  title?: string;
};

export const HomeHeader = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}}>
        <Image
          source={ICONS.magnifier}
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  icon: {
    height: 24,
    aspectRatio: 1,
    tintColor: COLORS.primary,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.darkGray,
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0,
    margin: "auto",
  },
});