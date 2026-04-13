import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function PetSizeSelector({ petSize, setPetSize, colors }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 12,
        }}
      >
        Tamaño del Perro
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        {["pequeno", "mediano", "grande"].map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => setPetSize(size)}
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 12,
              backgroundColor:
                petSize === size ? colors.accent : colors.cardBackground,
              alignItems: "center",
              borderWidth: 2,
              borderColor: petSize === size ? colors.accent : "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 14,
                color: petSize === size ? "#FFFFFF" : colors.primary,
              }}
            >
              {size === "pequeno"
                ? "Pequeño"
                : size === "mediano"
                  ? "Mediano"
                  : "Grande"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
