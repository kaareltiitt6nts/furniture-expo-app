import { ProductPreviewProps } from "@/components/product/ProductPreview";
import { COLORS } from "@/global/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export const ProductWidePreview = (props: ProductPreviewProps) => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name} numberOfLines={1}>
            {props.title ?? "null"}
          </Text>
          <Text style={styles.price}>$ {props.price ?? "null"}</Text>
        </View>

        <View>
          <Pressable
            style={styles.removeButton}
            onPress={props.onRemove}
            hitSlop={10}
          >
            <Ionicons
              name="close-circle-outline"
              size={24}
              color={COLORS.primary}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    flexDirection: "row",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 12,
    height: 100,
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 6,
    flexDirection: "row",
  },
  name: {
    fontSize: 14,
    fontWeight: "400",
    width: 200,
    overflow: "hidden",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
  removeButton: {
    marginRight: 8,
  },
});
