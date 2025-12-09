import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ProductPreviewProps } from "@/components/product/ProductPreview";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/global/colors";
import { Button } from "@/components/common/button/button";
import { IconButton } from "@/components/common/button/iconbutton";

export default function ProductDetail() {
  const searchParams: any = useLocalSearchParams();
  const [product, setProduct] = useState<ProductPreviewProps>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${searchParams.id}`)
      .then((data) => data.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    product && (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>$ {product.description}</Text>
          <View style={styles.controls}>
            <IconButton />
            <Button title={"Contact seller"} />
          </View>
        </View>
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  price: {
    fontSize: 34,
    fontWeight: 700,
  },
  description: {
    fontSize: 14,
    fontWeight: 300,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
    alignSelf: "flex-end",
    marginTop: "auto",
    marginBottom: 48,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "70%",
  },
  detailsContainer: {
    position: "absolute",
    flexDirection: "column",
    bottom: 0,
    height: "50%",
    paddingHorizontal: 24,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 32,
    gap: 32,
  },
});
