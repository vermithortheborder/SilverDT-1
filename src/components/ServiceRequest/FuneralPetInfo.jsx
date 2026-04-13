import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export function FuneralPetInfo({
  petName,
  setPetName,
  petSpecies,
  setPetSpecies,
  petBreed,
  setPetBreed,
  petWeight,
  setPetWeight,
  petColor,
  setPetColor,
  colors,
}) {
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
        Nombre de la Mascota *
      </Text>
      <TextInput
        value={petName}
        onChangeText={setPetName}
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
        Especie *
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 16,
        }}
      >
        {["perro", "gato", "ave", "roedor", "reptil", "otro"].map((species) => (
          <TouchableOpacity
            key={species}
            onPress={() => setPetSpecies(species)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 12,
              backgroundColor:
                petSpecies === species ? colors.accent : colors.background,
              borderWidth: 2,
              borderColor:
                petSpecies === species ? colors.accent : "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 14,
                color: petSpecies === species ? "#FFFFFF" : colors.primary,
              }}
            >
              {species.charAt(0).toUpperCase() + species.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

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
        value={petBreed}
        onChangeText={setPetBreed}
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

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Peso Aproximado (kg) *
      </Text>
      <TextInput
        value={petWeight}
        onChangeText={setPetWeight}
        placeholder="25.5"
        placeholderTextColor={colors.secondary}
        keyboardType="decimal-pad"
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
        Color de la Mascota *
      </Text>
      <TextInput
        value={petColor}
        onChangeText={setPetColor}
        placeholder="Dorado"
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
  );
}
