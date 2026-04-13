import React from "react";
import { View, Text, TextInput } from "react-native";

export function DurationInput({ durationDays, setDurationDays, colors }) {
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
        Duración (días)
      </Text>
      <TextInput
        value={durationDays}
        onChangeText={setDurationDays}
        keyboardType="number-pad"
        placeholder="Ej: 3"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.cardBackground,
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
