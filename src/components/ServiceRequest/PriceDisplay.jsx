import React from "react";
import { View, Text } from "react-native";

export function PriceDisplay({ total, description, colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.accent,
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Sora_400Regular",
          fontSize: 14,
          color: "#FFFFFF",
          marginBottom: 8,
        }}
      >
        Precio Estimado
      </Text>
      <Text
        style={{
          fontFamily: "Sora_800ExtraBold",
          fontSize: 36,
          color: "#FFFFFF",
        }}
      >
        ${total.toFixed(2)}
      </Text>
      {description && (
        <Text
          style={{
            fontFamily: "Sora_400Regular",
            fontSize: 12,
            color: "rgba(255,255,255,0.8)",
            marginTop: 8,
            textAlign: "center",
          }}
        >
          {description}
        </Text>
      )}
    </View>
  );
}
