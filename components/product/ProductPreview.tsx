import { Image, StyleSheet, Text, View } from "react-native";

export type ProductPreviewProps = {
  id?: number;
  name?: string;
  price?: number;
  imageUrl?: string;
};

export const ProductPreview = (props: ProductPreviewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/lamp.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{props.name ?? "null"}</Text>
        <Text style={styles.price}>$ {props.price ?? "null"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    margin: 12,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 12,
    width: 157,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {},
  name: {
    fontSize: 14,
    fontWeight: "400",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
});
