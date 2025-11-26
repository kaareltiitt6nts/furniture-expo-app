import { COLORS } from "@/global/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-navigation/elements";
import { Pressable, StyleSheet, View } from "react-native";

type UserParamProps = {
  label: string;
  value: string;
  onPress?: () => void;
};

export const UserParam = (props: UserParamProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View>
        <Text style={{ color: COLORS.inputbox }}>{props.label}</Text>
        {props.value && <Text style={styles.value}>{props.value}</Text>}
      </View>
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
  value: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
    marginTop: 4,
  },
});
