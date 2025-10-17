import {
  Pressable,
  StyleSheet
} from "react-native";
import { ProductPreview, ProductPreviewProps } from "../ProductPreview";

type ProductListProps = {
  products?: ProductPreviewProps[]
};

export const ProductGridList = (props: ProductListProps) => {
  return (
    <Pressable style={styles.container}>
      {props.products?.map((product, index) => (
        <ProductPreview key={index} name={product.name} price={product.price} imageUrl={product.imageUrl} />
      ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24
  }
})


