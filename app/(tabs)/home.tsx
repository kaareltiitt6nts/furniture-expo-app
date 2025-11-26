import { CategorySlider } from "@/components/category/list-horizontal-slider/CategorySlider";
import { HomeHeader } from "@/components/homeheader/homeheader";
import { ProductGridList } from "@/components/product/list-grid/ProductGridList";
import { ICONS } from "@/global/icons";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { fetch } from "expo/fetch";

const placeholderCategories = [
  { id: 1, title: "Popular", icon: "star" },
  { id: 2, title: "Chairs", icon: "flash" },
  { id: 3, title: "Tables", icon: "flash" },
  { id: 4, title: "Armchairs", icon: "flash" },
  { id: 5, title: "Beds", icon: "bed" },
  { id: 6, title: "Chairs", icon: "flash" },
  { id: 7, title: "Tables", icon: "flash" },
  { id: 8, title: "Sofas", icon: "flash" },
];

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((json) => setProducts(json));
    };

    getProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader
          title="Find All You Need"
          alignButton="left"
          icon={ICONS.magnifier}
        />
        <CategorySlider categories={placeholderCategories} />
        <ProductGridList products={products} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
