import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type ProductPreviewProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  onPress?: () => void;
  onRemove?: () => void;
};

export const ProductPreview = (props: ProductPreviewProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {props.title ?? "null"}
        </Text>
        <Text style={styles.price}>$ {props.price ?? "null"}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    margin: 12,
    width: 157,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 12,
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    width: "100%",
  },
  name: {
    fontSize: 14,
    fontWeight: "400",
    overflow: "hidden",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
});
