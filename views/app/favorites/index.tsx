import { HomeHeader } from "@/components/homeheader/homeheader";
import { ProductColumnList } from "@/components/product/list-col/ProductColumnList";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const placeholderProducts = [
  {
    id: 0,
    name: "Modern Lamp",
    price: 29.99,
    imageUrl: "@/assets/images/lamp.png",
  },
  {
    id: 1,
    name: "Stylish Chair",
    price: 89.99,
    imageUrl: "@/assets/images/lamp.png",
  },
  {
    id: 2,

    name: "Wooden Table",
    price: 199.99,
    imageUrl: "@/assets/images/lamp.png",
  },
  {
    id: 3,
    name: "Wooden Table",
    price: 199.99,
    imageUrl: "@/assets/images/lamp.png",
  },
  {
    id: 4,
    name: "Stylish Chair",
    price: 89.99,
    imageUrl: "@/assets/images/lamp.png",
  },
  {
    id: 5,
    name: "Wooden Table",
    price: 199.99,
    imageUrl: "@/assets/images/lamp.png",
  },
  {
    id: 6,
    name: "Wooden Table",
    price: 199.99,
    imageUrl: "@/assets/images/lamp.png",
  },
];

export const FavoritesScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader title="Favorites" />
        <ProductColumnList products={placeholderProducts} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});
