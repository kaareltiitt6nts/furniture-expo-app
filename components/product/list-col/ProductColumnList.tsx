import { Separator } from "@/components/separator/separator";
import { FlatList, StyleSheet, View } from "react-native";
import { ProductPreviewProps } from "../ProductPreview";
import { ProductWidePreview } from "../ProductWidePreview";

type ProductListProps = {
  products?: ProductPreviewProps[];
};

export const ProductColumnList = (props: ProductListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.products}
        renderItem={({ item }) => (
          <ProductWidePreview
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
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
