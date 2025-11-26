import { COLORS } from "@/global/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: COLORS.background,
                },
            }}
        >
            <Stack.Screen name="(splash)" />
            <Stack.Screen name="(tabs)"/>
        </Stack>
    );
}
