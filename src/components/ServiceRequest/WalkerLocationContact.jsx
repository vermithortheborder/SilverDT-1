import React from "react";
import { View, Text, TextInput } from "react-native";

export const WalkerLocationContact = ({
  walkerAddress,
  setWalkerAddress,
  walkerPhone,
  setWalkerPhone,
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
        📍 Ubicación y Contacto
      </Text>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Dirección para Recoger *
      </Text>
      <TextInput
        value={walkerAddress}
        onChangeText={setWalkerAddress}
        placeholder="Calle, Número, Colonia, CP"
        placeholderTextColor={colors.secondary}
        multiline
        numberOfLines={2}
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 16,
          textAlignVertical: "top",
        }}
      />

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Teléfono de Contacto *
      </Text>
      <TextInput
        value={walkerPhone}
        onChangeText={setWalkerPhone}
        placeholder="55 1234 5678"
        placeholderTextColor={colors.secondary}
        keyboardType="phone-pad"
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
        }}
      />
    </View>
  );
};
