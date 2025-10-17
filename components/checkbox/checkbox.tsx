import { COLORS } from "@/global/colors";
import { ICONS } from "@/global/icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type CheckboxProps = {
  defaultState?: boolean;
  onToggle?: () => void;
  label?: string;
};

export const Checkbox = ({ defaultState, onToggle, label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(defaultState || false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onToggle?.();
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={toggleCheckbox}
        style={
          isChecked
            ? styles.checkboxChecked
            : [styles.checkboxChecked, styles.checkboxUnchecked]
        }
      >
        <Image
          style={styles.checkboxImage}
          source={isChecked && ICONS.check}
        />
      </Pressable>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxChecked: {
    height: 30,
    aspectRatio: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.inputbox,
  },
  checkboxUnchecked: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.inputbox,
  },
  checkboxImage: {
    height: 16,
    aspectRatio: 1,
  },
  label: {
    color: COLORS.primary,
  },
});
