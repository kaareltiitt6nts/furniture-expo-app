import { COLORS } from "@/global/colors";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type HeaderProps = {
  title: string;
  showButton?: boolean;
  alignButton?: "left" | "right";
  icon?: ImageSourcePropType | undefined;
};

export const HomeHeader = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {}}
        style={props.alignButton === "right" ? { marginLeft: "auto" } : {}}
      >
        <Image source={props.icon} style={styles.icon} />
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
    height: 64,
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
