import { HomeHeader } from "@/components/homeheader/homeheader";
import { ProductColumnList } from "@/components/product/list-col/ProductColumnList";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { fetch } from "expo/fetch";

export default function FavoritesScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((json) => setProducts(json.slice(0, 10)));
    };

    getProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader title="Favorites" />
      <ProductColumnList products={products} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});
