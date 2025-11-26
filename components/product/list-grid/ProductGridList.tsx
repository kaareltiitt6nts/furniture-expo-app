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
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
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
