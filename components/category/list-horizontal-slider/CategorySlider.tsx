import { CategoryButton } from "@/components/category/CategoryButton";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type Category = {
  id: number;
  title: string;
  icon?: any;
};

type CategorySliderProps = {
  categories: Category[];
  onCategorySelect?: (categoryId: number) => void;
  initialSelectedId?: string;
};

export const CategorySlider = ({
  categories,
  onCategorySelect,
  initialSelectedId,
}: CategorySliderProps) => {
  const [selectedId, setSelectedId] = useState(categories[0]?.id);

  const handlePress = (categoryId: number) => {
    setSelectedId(categoryId);
    onCategorySelect?.(categoryId);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((cat) => (
          <CategoryButton
            key={cat.id}
            title={cat.title}
            selected={cat.id === selectedId}
            icon={cat.icon}
            onPress={() => handlePress(cat.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
});
