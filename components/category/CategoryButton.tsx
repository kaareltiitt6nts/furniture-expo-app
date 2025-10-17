import { COLORS } from "@/global/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text } from "react-native";

type CategoryButtonProps = {
  onPress?: () => void;
  title: string;
  selected: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
};

export const CategoryButton = (props: CategoryButtonProps) => {
  const { onPress, title, selected, icon } = props;
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
      hitSlop={5}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.iconContainer,
          selected && styles.iconContainerSelected,
          { opacity },
        ]}
      >
        <Ionicons
          name={icon}
          size={24}
          color={selected ? "#fff" : COLORS.darkGray}
        />
      </Animated.View>

      <Text
        style={[
          styles.text,
          selected && styles.textSelected,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
  },
  iconContainer: {
    alignSelf: "center",
    width: 50,
    height: 50,
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
  },
  iconContainerSelected: {
    backgroundColor: COLORS.darkGray,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    tintColor: COLORS.darkGray,
  },
  iconSelected: {
    tintColor: "#fff",
  },
  text: {
    textAlign: "center",
    marginTop: 4,
    fontSize: 12,
    color: COLORS.text,
    fontWeight: "400",
  },
  textSelected: {
    color: COLORS.darkGray,
  },
});
