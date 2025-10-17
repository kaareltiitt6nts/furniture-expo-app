import { COLORS } from "@/global/colors";
import { useRef } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  onPress?: () => void;
  title: string;
  type?: "normal" | "white";
};

export const Button = ({
  onPress = () => {},
  title,
  type = "normal",
}: ButtonProps) => {
  const opacity = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.6,
      duration: 20,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 50,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      hitSlop={20}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[
          styles.container,
          type === "white" && styles.whiteContainer,
          { opacity },
        ]}
      >
        <Text style={[styles.text, type === "white" && styles.whiteText]}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  whiteContainer: {
    backgroundColor: "#FFFFFF",
  },
  whiteText: {
    color: COLORS.primary,
  },
});
