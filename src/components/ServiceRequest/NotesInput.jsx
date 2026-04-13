import React from "react";
import { View, Text, TextInput } from "react-native";

export function NotesInput({ notes, setNotes, colors }) {
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
        Notas Adicionales
      </Text>
      <TextInput
        value={notes}
        onChangeText={setNotes}
        multiline
        numberOfLines={4}
        placeholder="Ej: Mi perro es nervioso con extraños"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.cardBackground,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
          minHeight: 100,
          textAlignVertical: "top",
        }}
      />
    </View>
  );
}
