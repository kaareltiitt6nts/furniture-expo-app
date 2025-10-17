import { ProductPreviewProps } from "@/components/product/ProductPreview";
import { COLORS } from "@/global/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export const ProductWidePreview = (props: ProductPreviewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/lamp.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name}>{props.name ?? "null"}</Text>
          <Text style={styles.price}>$ {props.price ?? "null"}</Text>
        </View>

        <View>
          <Pressable onPress={() => console.log("Remove")}>
            <Ionicons
              name="close-circle-outline"
              size={24}
              color={COLORS.primary}
            />
          </Pressable>
        </View>
      </View>
    </View>
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
    justifyContent: "space-between",
    flexGrow: 1,
    marginLeft: 6,
    flexDirection: "row",
  },
  name: {
    fontSize: 14,
    fontWeight: "400",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
});
