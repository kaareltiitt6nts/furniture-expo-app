import { COLORS } from "@/global/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 80,
        },
        sceneStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.inputbox}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.inputbox}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.inputbox}
            />
          ),
        }}
      />
    </Tabs>
  );
}
