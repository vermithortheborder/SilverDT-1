import React from "react";
import { View, Text, TextInput } from "react-native";

export const WalkerDogInfo = ({
  walkerDogName,
  setWalkerDogName,
  walkerDogBreed,
  setWalkerDogBreed,
  walkerDogAge,
  setWalkerDogAge,
  walkerDogWeight,
  setWalkerDogWeight,
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
        🐾 Información de la Mascota
      </Text>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Nombre del Perro *
      </Text>
      <TextInput
        value={walkerDogName}
        onChangeText={setWalkerDogName}
        placeholder="Max"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 16,
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
        Raza *
      </Text>
      <TextInput
        value={walkerDogBreed}
        onChangeText={setWalkerDogBreed}
        placeholder="Golden Retriever"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 16,
        }}
      />

      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 14,
              color: colors.primary,
              marginBottom: 8,
            }}
          >
            Edad *
          </Text>
          <TextInput
            value={walkerDogAge}
            onChangeText={setWalkerDogAge}
            placeholder="3 años"
            placeholderTextColor={colors.secondary}
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

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 14,
              color: colors.primary,
              marginBottom: 8,
            }}
          >
            Peso (kg) *
          </Text>
          <TextInput
            value={walkerDogWeight}
            onChangeText={setWalkerDogWeight}
            placeholder="25"
            placeholderTextColor={colors.secondary}
            keyboardType="decimal-pad"
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
      </View>
    </View>
  );
};
