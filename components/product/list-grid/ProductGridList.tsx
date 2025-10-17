import { StyleSheet, View } from "react-native";
import { ProductPreview, ProductPreviewProps } from "../ProductPreview";

type ProductListProps = {
  products?: ProductPreviewProps[];
};

export const ProductGridList = (props: ProductListProps) => {
  return (
    <View style={styles.container}>
      {props.products?.map((product) => (
        <ProductPreview
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          onPress={() => console.log(`OnPressed ${product.id}`)}
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
