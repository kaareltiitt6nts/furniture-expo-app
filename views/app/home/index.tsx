import { CategorySlider } from "@/components/category/list-horizontal-slider/CategorySlider";
import { HomeHeader } from "@/components/homeheader/homeheader";
import { ProductGridList } from "@/components/product/list-grid/ProductGridList";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const placeholderProducts = [
  {
    name: "Modern Lamp",
    price: 29.99,
    imageUrl: "@/assets/images/lamp.png"
  },
  {
    name: "Stylish Chair",
    price: 89.99,
    imageUrl: "@/assets/images/lamp.png"
  },
  {
    name: "Wooden Table",
    price: 199.99,
    imageUrl: "@/assets/images/lamp.png"
  },
  {
    name: "Wooden Table",
    price: 199.99,
    imageUrl: "@/assets/images/lamp.png"
  },
  {
    name: "Stylish Chair",
    price: 89.99,
    imageUrl: "@/assets/images/lamp.png"
  },
  {
    name: "Wooden Table",
    price: 199.99,
    imageUrl: "@/assets/images/lamp.png"
  },
  {
    name: "Wooden Table",
    price: 199.99,
    imageUrl: "@/assets/images/lamp.png"
  }
];

const placeholderCategories = [
  { id: 1, title: "Popular", icon: "star" },
  { id: 2, title: "Chairs", icon: "flash" },
  { id: 3, title: "Tables", icon: "flash" },
  { id: 4, title: "Armchairs", icon: "flash" },
  { id: 5, title: "Beds", icon: "bed" },
  { id: 6, title: "Chairs", icon: "flash" },
  { id: 7, title: "Tables", icon: "flash" },
  { id: 8, title: "Sofas", icon: "flash" },
]

export const HomeScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader title="Find All You Need" />
        <CategorySlider categories={placeholderCategories} />
        <ProductGridList products={placeholderProducts} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

  }
});
