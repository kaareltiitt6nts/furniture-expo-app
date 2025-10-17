import { COLORS } from "@/global/colors";
import { StyleSheet, Text, View } from "react-native";

type SeparatorProps = {
  label?: string;
};

export const Separator = ({ label }: SeparatorProps) => {
  return (
    <View style={styles.container}>
      {label && (
        <>
          <View style={styles.line} />
          <Text style={styles.label}>{label}</Text>
          <View style={styles.line} />
        </>
      )}

      {!label && <View style={styles.line} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  label: {
    fontSize: 16,
    marginHorizontal: 6,
    color: COLORS.primary,
  },
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 12,
    backgroundColor: COLORS.inputbox,
  },
});
