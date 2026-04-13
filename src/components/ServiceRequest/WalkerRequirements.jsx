import React from "react";
import { View, Text, TextInput } from "react-native";

export const WalkerRequirements = ({
  walkerRequirements,
  setWalkerRequirements,
  colors,
}) => {
  return (
    <View
      style={{
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "Sora_800ExtraBold",
          fontSize: 18,
          color: colors.primary,
          marginBottom: 16,
        }}
      >
        📋 Requisitos Básicos
      </Text>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Requisitos Especiales (Opcional)
      </Text>
      <TextInput
        value={walkerRequirements}
        onChangeText={setWalkerRequirements}
        placeholder="Ej: No socializa con otros perros, necesita correa corta, etc."
        placeholderTextColor={colors.secondary}
        multiline
        numberOfLines={3}
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
          minHeight: 80,
          textAlignVertical: "top",
        }}
      />
    </View>
  );
};
