import { Stack } from "expo-router";
import { COLORS } from "@/global/colors";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen name={"index"} />
    </Stack>
  );
}
