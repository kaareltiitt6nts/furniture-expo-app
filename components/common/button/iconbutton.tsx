import { COLORS } from "@/global/colors";
import React, { useRef } from "react";
import { Animated, Easing, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  onPress?: () => void;
  type?: "normal" | "white";
  toggled?: boolean;
};

export const IconButton = ({
  onPress = () => {},
  type = "normal",
  toggled = true,
}: IconButtonProps) => {
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
          toggled && styles.toggledContainer,
          { opacity },
        ]}
      >
        <Ionicons
          name={"bookmark"}
          style={[styles.icon, toggled && styles.toggledIcon]}
        />
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
    height: 64,
    width: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    color: "#FFF",
  },
  toggledContainer: {
    backgroundColor: COLORS.lightGray,
  },
  toggledIcon: {
    color: COLORS.primary,
  },
});
