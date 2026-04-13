import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export function PetSelector({ pets, selectedPet, setSelectedPet, colors }) {
  if (pets.length === 0) return null;

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
        Mascota (opcional)
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
        style={{ flexGrow: 0 }}
      >
        {pets.map((pet) => (
          <TouchableOpacity
            key={pet.id}
            onPress={() => setSelectedPet(pet.id)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 12,
              backgroundColor:
                selectedPet === pet.id ? colors.accent : colors.cardBackground,
              borderWidth: 2,
              borderColor:
                selectedPet === pet.id ? colors.accent : "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 14,
                color: selectedPet === pet.id ? "#FFFFFF" : colors.primary,
              }}
            >
              {pet.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
