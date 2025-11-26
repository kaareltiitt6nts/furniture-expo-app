import { Separator } from "@/components/separator/separator";
import { FlatList, StyleSheet, View } from "react-native";
import { ProductPreviewProps } from "../ProductPreview";
import { ProductWidePreview } from "../ProductWidePreview";
import { useEffect, useState } from "react";

type ProductListProps = {
  products: ProductPreviewProps[];
};

export const ProductColumnList = (props: ProductListProps) => {
  const [products, setProducts] = useState<ProductPreviewProps[]>([]);

  const onRemoveProduct = (productId: number) => {
    console.log(`REMOVE PRODUCT: ${productId}`);

    const newProducts = products.filter((product) => product.id != productId);

    setProducts(newProducts);
  };

  const onOpenProduct = (productId: number) => {
    console.log(`OPEN PRODUCT: ${productId}`);
  };

  useEffect(() => {
    setProducts(props.products);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductWidePreview
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            onPress={() => onOpenProduct(item.id)}
            onRemove={() => onRemoveProduct(item.id)}
          />
        )}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
