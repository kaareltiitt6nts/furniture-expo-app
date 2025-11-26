import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/global/colors";

type SettingsGroupProps = {
  title: string;
  icon?: React.ReactElement;
  onPress?: () => void;
  children?: React.ReactNode;
};

export const SettingsGroup = (props: SettingsGroupProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
        {props.icon && (
          <Pressable onPress={props.onPress}>{props.icon}</Pressable>
        )}
      </View>
      <View>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  titleContainer: {
    paddingVertical: 4,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.inputbox,
  },
  iconContainer: {},
  icon: {},
});
