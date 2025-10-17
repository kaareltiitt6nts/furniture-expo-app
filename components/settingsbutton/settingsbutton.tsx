import { COLORS } from "@/global/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-navigation/elements";
import { Pressable, StyleSheet, View } from "react-native";

type SettingsButtonProps = {
  label: string;
  description?: string;
  onPress?: () => void;
};

export const SettingsButton = (props: SettingsButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{props.label}</Text>
        {props.description && (
          <Text style={{ color: COLORS.inputbox, marginTop: 4 }}>
            {props.description}
          </Text>
        )}
      </View>
      <Ionicons name="chevron-forward" size={24} color={COLORS.primary} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    padding: 24,
    marginVertical: 8,
  },
  textContainer: {},
  label: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },
});
