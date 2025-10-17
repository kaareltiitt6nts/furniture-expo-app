import { COLORS } from "@/global/colors";
import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";

type UserDetailsProps = {
  name: string;
  email: string;
};

export const UserDetails = (props: UserDetailsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.email}>{props.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    gap: 6,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },
  email: {
    fontSize: 14,
    color: COLORS.inputbox,
  },
});
