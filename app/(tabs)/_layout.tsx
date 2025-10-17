import { COLORS } from "@/global/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: () => <Ionicons name="home" size={24} color={COLORS.primary}/>,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: () => <Ionicons name="bookmark" size={24} color={COLORS.primary}/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: () => <Ionicons name="settings" size={24} color={COLORS.primary}/>,
        }}
      />
    </Tabs>
  );
}
