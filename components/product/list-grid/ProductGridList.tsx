import { StyleSheet, View } from "react-native";
import { ProductPreview, ProductPreviewProps } from "../ProductPreview";
import { useRouter } from "expo-router";

type ProductListProps = {
  products?: ProductPreviewProps[];
};

export const ProductGridList = (props: ProductListProps) => {
  const router = useRouter();

  const onProductPress = (productId: number) => {
    router.navigate(`/product/${productId}`);
  };

  return (
    <View style={styles.container}>
      {props.products?.map((product) => (
        <ProductPreview
          id={product.id}
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          onPress={() => onProductPress(product.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
